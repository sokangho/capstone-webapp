import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../styleGuide';

const Panel = styled.div`
  width: 300px;
  height: 350px;
  margin-top: 20px;

  text-align: left;

  box-shadow: 0px 0px 10px ${colors.borderLight};
  outline: 1px solid ${colors.borderLight};
`;

const ContentContainer = styled.div`
  padding: 15px;
`;

const LoginHeading = styled.h3`
  font-size: 18px;
  font-family: ${fonts.robotoSlab};
  color: ${colors.darkText};

  &:after {
    content: '';
    display: block;
    width: 55px;
    padding-top: 10px;
    border-bottom: 2px solid ${colors.primaryBlue};
  }
`;

//FIXME!!
const InputLabel = styled.label`
  font-size: 12px;
  font-family: ${fonts.robotoSlab};
  font-weight: 400;
  color: ${colors.darkText};
  margin-bottom: 10px;
`;

//FIXME!
const InputBox = styled.input`
  display: block;
  margin-top: 20px;
  border: 1px solid ${colors.borderLight};
  border-radius: 2px;
  width: 250px;
  height: 20px;
  margin: 0px auto;
`;

const LoginPanel = () => {
  return (
    <Panel>
      <ContentContainer>
        <LoginHeading>Log In</LoginHeading>
        <InputLabel for="username">Username</InputLabel>
        <InputBox type="text" id="username" name="username" placeholder="username" />
      </ContentContainer>
    </Panel>
  );
};

export default LoginPanel;
