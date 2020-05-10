import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, colorCodes, fonts } from '../../styleGuide';
import applicationService from '../../services/application.service';

const modalStyles = {
  content: {
    maxWidth: '500px', maxHeight: '450px', margin: '50px auto', padding: '0px'
  }
};

const ModalTitleContainer = styled.div`
  display: flex;
  padding: 0px 40px;
  border-bottom: 1px solid ${colors.borderLight};
`;

const ModalTitle = styled.h1`
  font-family: ${fonts.robotoSlab};
  font-size: 24px;
  font-weight: 400px;
  color: ${colors.darkText};
`;

const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-family: ${fonts.robotoSlab};
  font-weight: 600;
  color: ${colorCodes.mediumGray};
`;

const NameInput = styled.input`
  display: block;
  border: 1px solid ${colors.borderLight};
  border-radius: 3px;
  width: 45%;
  height: ${props => props.height}px;
  margin: 10px 0px 20px;
  padding-left: 10px;

  &::placeholder {
    font-family: ${fonts.robotoSlab};
    font-size: 14px;
  }
`;

const DescriptionInput = styled.textarea`
  display: block;
  border: 1px solid ${colors.borderLight};
  border-radius: 3px;
  width: 90%;
  height: ${props => props.height}px;
  margin: 10px 0px 20px;
  padding: 10px;

  &::placeholder {
    font-family: ${fonts.robotoSlab};
    font-size: 14px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const AddButton = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  margin: 20px 10px;
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: ${fonts.robotoSlab};
  font-weight: 400;
`;

const CancelButton = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  margin: 20px 10px;
  background-color: ${colorCodes.mediumGray};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: ${fonts.robotoSlab};
  font-weight: 400;
`;


const ApplicationFormContainer = styled.form`
  padding: 30px 40px;
`;


class AddApplicationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appDescription: ''
    };
  }

  createNewApplication() {
    const { appName, appDescription } = this.state;
    applicationService.addApplication(
      { applicationName: appName, applicationDescription: appDescription }
    );
  }

  handleNameChange(e) {
    this.setState({ appName: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ appDescription: e.target.value });
  }

  render() {
    const { isModalOpen, onRequestCloseFunc, modalLabel } = this.props;
    const { appName, appDescription } = this.state;
    Modal.setAppElement('#root');

    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onRequestCloseFunc}
        contentLabel={modalLabel}
        style={modalStyles}
      >
        <ModalTitleContainer>
          <ModalTitle>Add Application</ModalTitle>
        </ModalTitleContainer>
        <ApplicationFormContainer onSubmit={() => this.createNewApplication()}>
          <InputLabel htmlFor="appname">Application Name</InputLabel>
          <NameInput
            type="text"
            id="applicationname"
            name="applicationname"
            placeholder="Application Name"
            value={appName}
            onChange={e => this.handleNameChange(e)}
            height="30"
            required
          />
          <InputLabel htmlFor="appdesc">Application Description</InputLabel>
          <DescriptionInput
            id="appdescription"
            name="appdescription"
            placeholder="Description for application"
            value={appDescription}
            onChange={e => this.handleDescriptionChange(e)}
            height="60"
          />
          <ButtonsContainer>
            <AddButton>Add</AddButton>
            <CancelButton onClick={onRequestCloseFunc}>Cancel</CancelButton>
          </ButtonsContainer>
        </ApplicationFormContainer>
      </Modal>
    );
  }
}

export default AddApplicationModal;

AddApplicationModal.propTypes = {
  isModalOpen: PropTypes.bool,
  onRequestCloseFunc: PropTypes.func,
  modalLabel: PropTypes.string
};
