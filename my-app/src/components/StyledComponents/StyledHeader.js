import { fonts, colors } from "../../styleGuide";
import styled from "styled-components";
import React from "react";

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

const Header = (props) => (
  <HeaderContainer>
    <HeaderTitle>{props.title}</HeaderTitle>
  </HeaderContainer>
);

export default Header;
