import React, { Component } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styleGuide";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import applicationService from '../../services/application.service';
import fontLoader from '../FontLoader';
import { fontUrls } from '../../styleGuide';
import Tooltip from '@material-ui/core/Tooltip';
import StyledPanel from '../../components/StyledComponents/StyledPanel'

const OtpPanelContainer = styled(StyledPanel)`
  width: 600px;
  height: 300px;
  
  .active-button {
    background-color: ${colors.primaryBlue};
    color: ${colors.primaryWhite};
  }
  .disabled-button {
    background-color: ${colors.subHeading};
    color: ${colors.primaryWhite};
    pointer-events: none;
  }
`;

const HeadingContainer = styled.div`
  outline: 1px solid ${colors.borderLight};
  padding: 10px 20px 10px;
`;

const PanelHeading = styled.h3`
  margin: 0;
  font-family: ${fonts.robotoSlab};
  color: ${colors.darkText};
`;

const InputLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
  font-family: ${fonts.robotoSlab};
  color: ${colors.darkText};
`;

const InputContainer = styled.div`
  padding: 30px;
`;

const SaveButton = styled.button`
  display: block;
  margin: 50px 25px 0 0;
  float: right;
  width: 255px;
  height: 35px;
  border: none;
  border-radius: 3px;
`;

const StyledFormControl = styled(FormControl)`
  width:90px;
`;

class OtpSettingsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { changesMade:false, showConfirmation:false, lifetimeUnit: "seconds", application:[]};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const { applicationId } = this.props;
    const res = await applicationService.getApplicationById(applicationId);
    this.setState({ application: res.data, 
      otpLength: res.data.otpLength,
      otpLifetime: res.data.otpLifetime  });
    fontLoader(fontUrls.robotoSlab, document);
  }

  onChange(e) {
    //update the state of the input and whether changes have been made
    this.setState({
      [e.target.name]: e.target.value,
      changesMade:true
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const {otpLength, lifetimeUnit, otpLifetime, application } = this.state;
    const otpLifetimeConverted= this.calculateLifetimeInSeconds(lifetimeUnit, parseInt(otpLifetime))
    const res= await applicationService.updateOtpSettings(application.id, otpLifetimeConverted, parseInt(otpLength));
    
    //if response is a success, show confirmation message
    if (res.status === 204)
    {
      this.showConfirmationMessage();
      this.setState({
        changesMade:false
      });
    }
  }

  calculateLifetimeInSeconds(lifetimeUnit, otpLifetime){
    if (lifetimeUnit === "minutes")
    {
      return otpLifetime * 60;
    }
    else return otpLifetime;
  }

  showConfirmationMessage(){
    this.setConfirmation(true);
    setTimeout( () => {
      this.setConfirmation(false);
    }, 2500);
  }
  
  setConfirmation(boolean){
    this.setState({showConfirmation: boolean});
  }

  render() {
    const {lifetimeUnit} = this.state;
    const {otpLength, otpLifetime } = this.state;
    return (
      <>
        <OtpPanelContainer>
          <HeadingContainer>
            <PanelHeading>OTP Settings</PanelHeading>
          </HeadingContainer>
          <form onSubmit={this.onSubmit}>
            <PasswordLifetime lifetimeUnit = {lifetimeUnit} otpLifetime={otpLifetime} onChange = {this.onChange}/>
            <PasswordLength otpLength={otpLength} onChange = {this.onChange}/>
            <Tooltip title="Saved!"
              open={this.state.showConfirmation}
              placement="top">
            <SaveButton className={this.state.changesMade ? 'active-button' : 'disabled-button'} type="submit">Save Changes</SaveButton>
            </Tooltip>
          </form>
        </OtpPanelContainer>
      </>
    );
  }
}

const PasswordLifetime = (props) => {
  const { onChange, otpLifetime, lifetimeUnit } = props;
  return (
    <InputContainer style={{ float: 'left' }}>
      <InputLabel>Password Lifetime</InputLabel>
      <p />
      <TextField
        type="number"
        value={otpLifetime}
        InputProps={{ inputProps: { min: 1, max: 500 } }}
        onChange={onChange}
        name="otpLifetime"
      />
      <StyledFormControl>
        <Select
          value={lifetimeUnit}
          onChange={onChange}
          name="lifetimeUnit"
          autoWidth
        >
          <MenuItem value={"seconds"}>Seconds</MenuItem>
          <MenuItem value={"minutes"}>Minutes</MenuItem>
        </Select>
      </StyledFormControl>
    </InputContainer>
  );
}

const PasswordLength = (props) => {
  const { onChange, otpLength } = props;
  return (
    <InputContainer>
      <InputLabel>Password Length</InputLabel>
      <p />
      <TextField
        type="number"
        value={otpLength}
        InputProps={{ inputProps: { min: 4, max: 20 } }}
        onChange={onChange}
        name ="otpLength"
      />
    </InputContainer>
  );
}

export default OtpSettingsPanel;