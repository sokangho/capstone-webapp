import styled from 'styled-components';
import { colors } from '../../styleGuide';

const StyledPanel = styled.div`
  margin-top: 20px;
  background: ${colors.primaryWhite};
  text-align: left;
  box-shadow: 0px 0px 10px ${colors.borderLight};
  outline: 1px solid ${colors.borderLight};
`;

export default StyledPanel;
