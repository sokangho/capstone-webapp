import React, { Component } from "react";
import axios from "axios";
import { authHeader } from "../../helpers/authHeader";
import { authenticationService } from "../../services/authentication.service";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUser,
      users: [],
    };
  }

  async componentDidMount() {
    console.log(this.props.applicationId);

    const res = await this.getUsers();
    console.log(res);
    this.setState({ users: res.data });
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
      const { id, applicationId, email, username } = user;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{applicationId}</td>
          <td>{email}</td>
          <td>{username}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    return (
      <tr>
        <td>Id</td>
        <td>Application Id</td>
        <td>Email</td>
        <td>Username</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1 id="title">User List</h1>
        <table id="users">
          <tbody>
            {this.renderTableHeader()}
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
