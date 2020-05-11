import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import applicationService from '../../services/application.service';
import fontLoader from '../../components/FontLoader';
import Userlist from '../../components/UserList/UserList';
import OtpSettingsPanel from '../../components/OtpSettingsPanel/OtpSettingsPanel';
import Header from '../../components/StyledComponents/StyledHeader';
import { fontUrls } from '../../styleGuide';

const ContentContainer = styled.div`
  margin-left: 60px;
`;

class ApplicationDashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      application: {},
      applicationId: 0
    };
  }

  async componentDidMount() {
    fontLoader(fontUrls.robotoSlab, document);
    const { match } = this.props;
    const { applicationId } = match.params;
    const res = await applicationService.getApplicationById(applicationId);
    // Check if res is successful
    if (res.status === 200) {
      this.setState({
        application: res.data,
        applicationId
      });
    }
  }

  render() {
    const { application, applicationId } = this.state;
    if (!application || !applicationId) {
      return null;
    }
    return (
      <div>
        <Header title={`${application.applicationName} Dashboard`} />
        <ContentContainer>
          <Link to="/">Back</Link>
          <OtpSettingsPanel application={application} />
          <Userlist
            applicationId={applicationId}
          />
        </ContentContainer>
      </div>
    );
  }
}

ApplicationDashboardView.propTypes = {
  match: PropTypes.object
};

export default ApplicationDashboardView;
