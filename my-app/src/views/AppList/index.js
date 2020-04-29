import React from 'react';
import styled from 'styled-components';
import fontLoader from '../../components/FontLoader';
import { fontUrls, fonts, colors } from '../../styleGuide';

const HeaderContainer = styled.div`
  display: flex;
  background-color: ${colors.headerBackground};
  padding: 0px 50px;
  border: 1px solid ${colors.borderLight};
`;

const HeaderTitle = styled.h1`
  font-family: ${fonts.robotoSlab};
  font-size: 30px;
  font-weight: 400px;
  color: ${colors.darkText};
`;

const ButtonContainer = styled.div`
  padding: 0px 60px;
`;

const AddApplicationButton = styled.button`
  display: block;
  width: 120px;
  height: 40px;
  margin: 25px auto 0px;
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-family: ${fonts.robotoSlab};
  font-weight: 300;
  float: right;
`;

class AppList extends React.Component {
  componentDidMount() {
    fontLoader(fontUrls.robotoSlab, document);
  }

  render() {
    return (
      <>
        <HeaderContainer><HeaderTitle>Applications</HeaderTitle></HeaderContainer>
        <ButtonContainer>
          <AddApplicationButton>Add Application</AddApplicationButton>
        </ButtonContainer>
      </>
    );
  }
}

export default AppList;
