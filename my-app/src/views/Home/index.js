import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fontLoader from '../../components/FontLoader';
import { authenticationService } from '../../services/authentication.service';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUser,
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const { document } = this.props;
    fontLoader(URL, document);
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
