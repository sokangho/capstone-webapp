import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, fonts, colorCodes } from '../../styleGuide';

const AppListTable = styled.table`
  margin: 0px auto;
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

  .app_id {
    padding: 10px 50px;
  }

  .app_name {
    padding: 10px 100px;
    color: ${colorCodes.dodgerBlue};
    text-decoration: underline;
  }

  .app_users {
    padding: 10px 100px;
  }

  .app_desc {
    padding: 10px 200px;
  }
`;

const ApplicationTable = props => {
  const { applications } = props;
  return (
    <AppListTable>
      <thead>
        <tr>
          <th className="app_id">ID</th>
          <th className="app_name">Name</th>
          <th className="app_desc">Description</th>
          <th className="app_users">Active Users</th>
        </tr>
      </thead>
      <tbody>
        {applications.map(app => (
          <tr key={app.id}>
            <td className="app_id">{app.id}</td>
            <td className="app_name">{app.applicationName}</td>
            <td className="app_desc">{app.applicationDescription}</td>
            <td className="app_users">{app.applicationusers ? app.applicationusers.length : 0}</td>
          </tr>
        ))}
      </tbody>
    </AppListTable>
  );
};

ApplicationTable.propTypes = {
  applications: PropTypes.array
};

ApplicationTable.defaultProps = {
  applications: []
};

export default ApplicationTable;
