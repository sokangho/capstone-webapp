import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { authHeader } from "../../helpers/authHeader";
import { authenticationService } from "../../services/authentication.service";
import { fontUrls, colors, fonts } from "../../styleGuide";
import fontLoader from "../../components/FontLoader";

const UserTable = styled.table`
  background-color: ${colors.primaryWhite};
  font-family: ${fonts.robotoSlab};
`;

const AppSubHeading = styled.h2`
  font-size: 26px;
  font-family: ${fonts.robotoSlab};
  font-weight: 300;
  color: ${colors.subHeading};
  margin: 0px;
`;
const StyledCell = styled.td`
  padding: 10px 200px 10px 20px;
`;
const URL = fontUrls.robotoSlab;

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
    fontLoader(URL, document);
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
          <StyledCell>{id}</StyledCell>
          <StyledCell>{username}</StyledCell>
          <StyledCell>{email}</StyledCell>
          <StyledCell>{mobileNumber}</StyledCell>
        </tr>
      );
    });
  }

  renderTableHeader() {
    return (
      <tr>
        <StyledCell>Id</StyledCell>
        <StyledCell>Username</StyledCell>
        <StyledCell>Email</StyledCell>
        <StyledCell>Mobile</StyledCell>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <AppSubHeading>User List</AppSubHeading>
        <UserTable>
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData()}
          </tbody>
        </UserTable>
      </div>
    );
  }
}

export default UserList;
