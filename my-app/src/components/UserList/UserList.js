import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontUrls, colors, fonts } from '../../styleGuide';
import fontLoader from '../FontLoader';
import StyledTable from '../StyledComponents/StyledTable';
import applicationService from '../../services/application.service';

const AppSubHeading = styled.h2`
  font-size: 26px;
  font-family: ${fonts.robotoSlab};
  font-weight: 300;
  color: ${colors.darkText};
  margin: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const TableContainer = styled.div`
  ${StyledTable} td,
  ${StyledTable} th {
    padding: 10px 200px 10px 20px;
  }
`;

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const { applicationId } = this.props;
    const res = await applicationService.getUsers(applicationId);
    this.setState({ users: res.data });
    fontLoader(fontUrls.robotoSlab, document);
  }

  renderTableData() {
    const { users } = this.state;
    return users.map(user => {
      const {
        id, mobileNumber, email, username
      } = user;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{mobileNumber}</td>
        </tr>
      );
    });
  }

  static renderTableHeader() {
    return (
      <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Email</th>
        <th>Mobile</th>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <AppSubHeading>User List</AppSubHeading>
        <TableContainer>
          <StyledTable>
            <thead>{UserList.renderTableHeader()}</thead>
            <tbody>{this.renderTableData()}</tbody>
          </StyledTable>
        </TableContainer>
      </div>
    );
  }
}

UserList.propTypes = {
  applicationId: PropTypes.number
};

export default UserList;
