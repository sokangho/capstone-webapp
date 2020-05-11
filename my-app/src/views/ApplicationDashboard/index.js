import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fontLoader from '../../components/FontLoader';
import Userlist from '../../components/UserList/UserList';
import OtpSettingsPanel from '../../components/OtpSettingsPanel/OtpSettingsPanel';
import Header from '../../components/StyledComponents/StyledHeader';
import { fontUrls } from '../../styleGuide';

const ContentContainer = styled.div`
  margin-left: 60px;
`;

class ApplicationDashboardView extends Component {
  componentDidMount() {
    fontLoader(fontUrls.robotoSlab, document);
  }

  render() {
    const { match } = this.props;
    const { applicationId } = match.params;
    return (
      <div>
        <Header title={`Dashboard`} />
        <ContentContainer>
          <Link to="/">Back</Link>
          <OtpSettingsPanel applicationId={applicationId}/>
          <Userlist
            applicationId={applicationId}
          />
        </ContentContainer>
      </div>
    );
  }
}

ApplicationDashboardView.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object
};

export default ApplicationDashboardView;
