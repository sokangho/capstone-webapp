import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, fonts } from '../../styleGuide';

const Panel = styled.div`
  width: 300px;
  height: 320px;
  margin-top: 20px;

  background: ${colors.primaryWhite};
  text-align: left;

  box-shadow: 0px 0px 10px ${colors.borderLight};
  outline: 1px solid ${colors.borderLight};
`;

const ContentContainer = styled.form`
  padding: 20px;
`;

const LoginHeading = styled.h3`
  font-size: 18px;
  font-family: ${fonts.robotoSlab};
  color: ${colors.darkText};

  &::after {
    content: '';
    display: block;
    width: 55px;
    padding-top: 5px;
    border-bottom: 2px solid ${colors.primaryBlue};
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 14px;
  font-family: ${fonts.robotoSlab};
  font-weight: 400;
  color: ${colors.darkText};
`;

const InputBox = styled.input`
  display: block;
  border: 1px solid ${colors.borderLight};
  border-radius: 3px;
  width: 250px;
  height: 30px;
  margin: 5px auto 20px;
  padding-left: 10px;

  &::placeholder {
    font-family: ${fonts.robotoSlab};
    font-size: 14px;
  }
`;

const LoginButton = styled.button`
  display: block;
  width: 255px;
  height: 35px;
  margin: 25px auto 0px;
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
`;

class LoginPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { onSubmit } = this.props;

    const credential = {
      username,
      password
    };

    onSubmit(credential);
  }

  render() {
    const { username, password } = this.state;

    return (
      <Panel>
        <ContentContainer onChange={this.onChange} onSubmit={this.onSubmit}>
          <LoginHeading>Log In</LoginHeading>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputBox
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.onChange}
          />
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputBox
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.onChange}
          />
          <LoginButton type="submit">Log In</LoginButton>
        </ContentContainer>
      </Panel>
    );
  }
}

LoginPanel.propTypes = {
  onSubmit: PropTypes.func
};

export default LoginPanel;
