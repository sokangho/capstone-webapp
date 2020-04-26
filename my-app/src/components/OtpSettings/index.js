import React from "react";
import styled from "styled-components";
import { Menu, Dropdown, Button, InputNumber } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { colors, fonts } from "../../styleGuide";
import "antd/dist/antd.css";

const Panel = styled.div`
  width: 600px;
  height: 300px;
  margin-top: 20px;

  background: ${colors.primaryWhite};
  text-align: left;

  box-shadow: 0px 0px 10px ${colors.borderLight};
  outline: 1px solid ${colors.borderLight};
`;

const ContentContainer = styled.div`
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
  width: 255px;
  height: 35px;
  margin: 50px 25px 0 0;
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
  float: right;
`;

const menu = (
  <Menu>
    <Menu.Item>
      <a onClick={handleButtonClick}>Seconds</a>
    </Menu.Item>
    <Menu.Item>
      <a onClick={handleButtonClick}>Minutes</a>
    </Menu.Item>
  </Menu>
);
class OtpSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lifetimeUnit: "Seconds" };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { onSubmit } = this.props;

    const credential = {
      username,
      password,
    };

    onSubmit(credential);
  }

  render() {
    return (
      <div
        style={{ margin: "0px 0px 0px 100px" }}
        className={this.props.classame}
      >
        <Panel>
          <ContentContainer onChange={this.onChange} onSubmit={this.onSubmit}>
            <PanelHeading>OTP Settings</PanelHeading>
          </ContentContainer>
          <PasswordLifetime
            lifetimeUnit={this.state.lifetimeUnit}
          ></PasswordLifetime>
          <PasswordLength></PasswordLength>
          <SaveButton type="submit">Save Changes</SaveButton>
        </Panel>
      </div>
    );
  }
}

function PasswordLifetime(props) {
  return (
    <InputContainer style={{ float: "left" }}>
      <InputLabel>Password Lifetime</InputLabel>
      <p />
      <InputNumber min={30} max={360} defaultValue={60} />
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          {props.lifetimeUnit} <DownOutlined />
        </Button>
      </Dropdown>
    </InputContainer>
  );
}
function PasswordLength(props) {
  return (
    <InputContainer>
      <InputLabel>Password Length</InputLabel>
      <p />
      <InputNumber min={1} max={10} defaultValue={6} />
    </InputContainer>
  );
}

function handleButtonClick() {
  return 1;
}

export default OtpSettings;
