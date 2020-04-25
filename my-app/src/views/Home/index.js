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
  }

  componentDidMount() {
    const { document } = this.props;
    fontLoader(URL, document);
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <h1>Hi {currentUser.userProfile.name}</h1>
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
