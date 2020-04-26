import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { fontUrls, colors, fonts } from "../../styleGuide";
import fontLoader from "../../components/FontLoader";
import LoginPanel from "../../components/LoginPanel";

const ContentContainer = styled.div`
 max-width: 500px;
  text-align: center;

  position: absolute;
  top 50%; left: 50%;
  transform: translate(-50%, -50%);
`;

const AppHeading = styled.h1`
  font-size: 30px;
  font-family: ${fonts.robotoSlab};
  font-weight: 600;
  color: ${colors.primaryBlue};
  margin: 0px;
`;

const AppSubHeading = styled.h2`
  font-size: 26px;
  font-family: ${fonts.robotoSlab};
  font-weight: 300;
  color: ${colors.subHeading};
  margin: 0px;
`;

const URL = fontUrls.robotoSlab;

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { document } = this.props;
    fontLoader(URL, document);
  }

  async onSubmit(credential) {
    const options = {
      method: "POST",
      data: { username: credential.username, password: credential.password },
      url: `${process.env.REACT_APP_API_URL}/accounts/login`
    };
    const res = await axios(options);

    // Login successful
    if (res.status === 200) {
      // Redirect to application page
      this.setState({
        redirect: "/home"
      });
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect !== null) {
      return <Redirect to={redirect} />;
    }

    return (
      <>
        <ContentContainer>
          <AppHeading>One Time Password</AppHeading>
          <AppSubHeading>Manager</AppSubHeading>
          <LoginPanel onSubmit={this.onSubmit} />
        </ContentContainer>
      </>
    );
  }
}

// Done to simply testing, can pass mocked document as prop
LoginView.propTypes = {
  document: PropTypes.object
};

LoginView.defaultProps = {
  document: window.document
};

export default LoginView;
