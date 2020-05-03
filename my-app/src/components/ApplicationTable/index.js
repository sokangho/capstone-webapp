import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, fonts, colorCodes } from "../../styleGuide";
import { Link } from "react-router-dom";
import StyledTable from "../../components/StyledComponents/StyledTable";

const AppListTable = styled(StyledTable)`
  margin: 0px auto;

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

const ApplicationTable = (props) => {
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
        {applications.map((app) => (
          <tr key={app.id}>
            <td className="app_id">{app.id}</td>
            <td className="app_name">
              <Link
                to={{
                  pathname: `application-dashboard/${app.id}`,
                  state: {
                    applicationName: app.applicationName,
                  },
                }}
              >
                {app.applicationName}
              </Link>
            </td>
            <td className="app_desc">{app.applicationDescription}</td>
            <td className="app_users">
              {app.applicationusers ? app.applicationusers.length : 0}
            </td>
          </tr>
        ))}
      </tbody>
    </AppListTable>
  );
};

ApplicationTable.propTypes = {
  applications: PropTypes.array,
};

ApplicationTable.defaultProps = {
  applications: [],
};

export default ApplicationTable;
