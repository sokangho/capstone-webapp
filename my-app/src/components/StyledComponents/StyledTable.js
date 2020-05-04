import styled from 'styled-components';
import { colors, fonts, colorCodes } from '../../styleGuide';

const StyledTable = styled.table`
  text-align: center;
  font-family: ${fonts.robotoSlab};
  border-collapse: collapse;
  box-shadow: 0px 0px 10px ${colorCodes.gray};

  thead {
    border: 1px solid ${colorCodes.silver};
    background-color: ${colors.primaryWhite};
    box-shadow: 0px 0px 3px ${colors.borderLight};
  }

  tbody {
    background-color: ${colors.headerBackground};
  }

  th {
    font-weight: 500;
    color: #696969;
  }

  td {
    font-weight: 300;
    color: #696969;
  }

  tr {
    box-shadow: 0px 0px 3px ${colors.borderLight};
    border: 1px solid ${colorCodes.silver};
  }

  tr:nth-child(even) {
    background-color: ${colors.primaryWhite};
  }
`;

export default StyledTable;
