import React from 'react';
import styled from 'styled-components';
import fontLoader from '../../components/FontLoader';
import { fontUrls, fonts, colors } from '../../styleGuide';
import Header from '../../components/StyledComponents/StyledHeader';

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
        <Header title="Applications" />
        <ButtonContainer>
          <AddApplicationButton>Add Application</AddApplicationButton>
        </ButtonContainer>
      </>
    );
  }
}

export default AppList;
