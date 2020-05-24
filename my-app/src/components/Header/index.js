import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { colors, colorCodes } from '../../styleGuide';
import authenticationService from '../../services/authentication.service';

const HeaderContainer = styled.div`
  background-color: ${colors.primaryWhite};
  overflow: hidden;
`;

const DropDownContainer = styled.div`
  float: right;
  overflow: hidden;
`;

const HeaderButton = styled.button`
  display: inline;
  font-size: 18px;
  width: 150px;
  height: 30px;
  border: 1px solid ${colors.borderLight};
  background-color: inherit;
  color: ${colorCodes.mediumGray};
  font-family: inherit;
  margin: 0; 
`;

const DropDownButton = styled(HeaderButton)`
  text-align: left;
  padding: 0px 20px;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${colors.primaryWhite};
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  ${DropDownContainer}:hover & {
    display: block;
  }
`;

const ContentButton = styled(HeaderButton)`
  display: block;
  float: none;
`;

const ApplicationsButton = styled(HeaderButton)`
  disply: block;
  float: right;
`;

const DownChevronIcon = styled.svg`
  float: right;
  width: 12px;
  height: 12px;
  margin: 5px 0px;
  fill: ${colorCodes.mediumGray};
`;


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      shouldRedirectToHome: false
    };
  }

  logoutUser() {
    authenticationService.logout();
    this.setState({ isLoggedIn: false });
    window.location.reload(false);
  }

  redirectToHome() {
    this.setState({ shouldRedirectToHome: true });
  }


  render() {
    const displayName = localStorage.getItem('displayName');
    const { isLoggedIn, shouldRedirectToHome } = this.state;
    const { location } = this.props;
    return (
      <>
        {isLoggedIn && (
        <HeaderContainer>
          <DropDownContainer>
            <DropDownButton>
              {displayName}
              <DownChevronIcon viewBox="0 0 8 8">
                <path d="M1.5 1L0 2.5l4 4 4-4L6.5 1 4 3.5 1.5 1z" />
              </DownChevronIcon>
            </DropDownButton>
            <DropDownContent>
              <ContentButton onClick={() => this.logoutUser()}>Log Out</ContentButton>
            </DropDownContent>
          </DropDownContainer>
          <ApplicationsButton onClick={() => this.redirectToHome()}>
            Applications
          </ApplicationsButton>
        </HeaderContainer>
        )}
        {shouldRedirectToHome && (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )}
      </>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
