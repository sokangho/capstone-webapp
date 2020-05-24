import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import fontLoader from '../../components/FontLoader';
import ApplicationTable from '../../components/ApplicationTable';
import AddApplicationForm from '../../components/AddApplicationModal';
import Header from '../../components/Header';

import authenticationService from '../../services/authentication.service';
import applicationService from '../../services/application.service';

import { fontUrls, fonts, colors } from '../../styleGuide';

const TitleContainer = styled.div`
  display: flex;
  background-color: ${colors.headerBackground};
  padding: 0px 50px;
  border: 1px solid ${colors.borderLight};
`;

const AppListTitle = styled.h1`
  font-family: ${fonts.robotoSlab};
  font-size: 30px;
  font-weight: 400px;
  color: ${colors.darkText};
`;

const MainContentContainer = styled.div`
  width: 1280px;
  margin: 0px auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddApplicationButton = styled.button`
  display: block;
  width: 140px;
  height: 40px;
  margin: 20px 0px;
  margin-right: 40px;
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: ${fonts.robotoSlab};
  font-weight: 400;
`;

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Will pass this as a prop to header
      // currentUser: authenticationService.currentUser,
      applications: [],
      isModalOpen: false
    };

    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    const { document } = this.props;
    fontLoader(fontUrls.robotoSlab, document);

    const res = await applicationService.getApplications();
    this.setState({ applications: res.data });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  logout() {
    const { history } = this.props;
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { applications, isModalOpen } = this.state;

    return (
      <>
        <Header />
        <TitleContainer>
          <AppListTitle>Applications</AppListTitle>
        </TitleContainer>
        <MainContentContainer>
          <ButtonContainer>
            <AddApplicationButton onClick={() => this.openModal()}>
              Add Application
            </AddApplicationButton>
          </ButtonContainer>
          <ApplicationTable applications={applications} />
          <AddApplicationForm isModalOpen={isModalOpen} onRequestCloseFunc={() => this.closeModal()} modalLabel="Add Application Modal" />
        </MainContentContainer>
      </>
    );
  }
}

HomeView.propTypes = {
  document: PropTypes.object,
  history: PropTypes.object
};

// Done to simply testing, can pass mocked document as prop
HomeView.defaultProps = {
  document: window.document
};

export default HomeView;
