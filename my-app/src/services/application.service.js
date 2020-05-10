import axios from 'axios';
import authHeader from '../helpers/authHeader';
import authenticationService from './authentication.service';

const getApplications = async () => {
  const { currentUser } = authenticationService;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader()
    },
    url: `${process.env.REACT_APP_API_URL}/accounts/${currentUser.userProfile.id}/applications`
  };
  return axios(options);
};

const addApplication = async ({ applicationName, applicationDescription }) => {
  const { currentUser } = authenticationService;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader()
    },
    url: `${process.env.REACT_APP_API_URL}/applications/`,
    data: {
      applicationName,
      accountId: currentUser.userProfile.id,
      applicationDescription
    }
  };
  return axios(options);
};

const applicationService = {
  getApplications,
  addApplication
};

export default applicationService;
