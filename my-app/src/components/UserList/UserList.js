import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import authenticationService from "../../services/authentication.service";
import { fontUrls, colors, fonts } from "../../styleGuide";
import fontLoader from "../../components/FontLoader";
import authHeader from "../../helpers/authHeader";
import StyledTable from "../../components/StyledComponents/StyledTable";

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
      currentUser: authenticationService.currentUser,
      users: [],
    };
  }

  async componentDidMount() {
    const res = await this.getUsers();
    this.setState({ users: res.data });
    fontLoader(fontUrls.robotoSlab, document);
  }
  async getUsers() {
    const id = this.props.applicationId;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
      url: `${process.env.REACT_APP_API_URL}/applications/${id}/applicationusers`,
    };
    return await axios(options);
  }

  renderTableData() {
    return this.state.users.map((user, index) => {
      const { id, mobileNumber, email, username } = user;
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

  renderTableHeader() {
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
            <thead>{this.renderTableHeader()}</thead>
            <tbody>{this.renderTableData()}</tbody>
          </StyledTable>
        </TableContainer>
      </div>
    );
  }
}

export default UserList;
