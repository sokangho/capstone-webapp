import React, { Component } from "react";
import fontLoader from "../../components/FontLoader";
import styled from "styled-components";
import Userlist from "../../components/UserList/UserList";
import Header from "../../components/StyledComponents/StyledHeader";
import { fontUrls } from "../../styleGuide";

const ContentContainer = styled.div`
  margin-left: 60px;
`;

class ApplicationDashboardView extends Component {
  componentDidMount() {
    fontLoader(fontUrls.robotoSlab, document);
  }

  render() {
    const { applicationName } = this.props.location.state;
    return (
      <div>
        <Header title={applicationName + " Dashboard"} />
        <ContentContainer>
          <Userlist
            applicationId={this.props.match.params.applicationId}
          ></Userlist>
        </ContentContainer>
      </div>
    );
  }
}

export default ApplicationDashboardView;
