import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import fontLoader from '../../components/FontLoader';
import { authenticationService } from '../../services/authentication.service';
import { authHeader } from '../../helpers/authHeader';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUser,
      applications: [],
    };

    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    const { document } = this.props;
    fontLoader(URL, document);

    const applications = await this.getApplications();
    // console.log(applications);
    // this.setState({ applications });
  }

  async getApplications() {
    const { currentUser } = this.state;

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
      url: `${process.env.REACT_APP_API_URL}/accounts/${currentUser.userProfile.id}/applications`,
    };

    return await axios(options);
  }

  logout() {
    authenticationService.logout();
    this.props.history.push('/login');
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <h1>Hi {currentUser.userProfile.name}</h1>

        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

// Done to simply testing, can pass mocked document as prop
HomeView.propTypes = {
  document: PropTypes.object,
};

HomeView.defaultProps = {
  document: window.document,
};

export default HomeView;
