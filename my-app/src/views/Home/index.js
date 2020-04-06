import { Component } from 'react';
import PropTypes from 'prop-types';

import fontLoader from '../../components/FontLoader';

class HomeView extends Component {
  componentDidMount() {
    const { document } = this.props;
    fontLoader(URL, document);
  }

  render() {
    return 'HomePage';
  }
}

// Done to simply testing, can pass mocked document as prop
HomeView.propTypes = {
  document: PropTypes.object
};

HomeView.defaultProps = {
  document: window.document
};

export default HomeView;
