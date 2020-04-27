import React, { Component } from "react";
import PropTypes from "prop-types";
import fontLoader from "../../components/FontLoader";
import styled from "styled-components";
import { fontUrls, colors, fonts } from "../../styleGuide";
import Userlist from "../../components/UserList/UserList";

const AppHeading = styled.h1`
  font-size: 30px;
  font-family: ${fonts.robotoSlab};
  font-weight: 600;
  color: ${colors.subHeading};
  margin: 0px;
`;

const ContentContainer = styled.div``;

class ApplicationDashboardView extends Component {
  componentDidMount() {
    const { document } = this.props;
    fontLoader(URL, document);
  }

  render() {
    return (
      <>
        <AppHeading>Application Dashboard</AppHeading>
        <ContentContainer>
          <Userlist
            applicationId={this.props.match.params.applicationId}
          ></Userlist>
        </ContentContainer>
      </>
    );
  }
}

// Done to simply testing, can pass mocked document as prop
ApplicationDashboardView.propTypes = {
  document: PropTypes.object,
};

ApplicationDashboardView.defaultProps = {
  document: window.document,
};

export default ApplicationDashboardView;
