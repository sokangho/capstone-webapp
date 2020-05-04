import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../styleGuide';

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

const Header = props => {
  const { title } = props;
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
