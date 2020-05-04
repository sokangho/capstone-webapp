import axios from 'axios';
import authHeader from '../helpers/authHeader';
import authenticationService from './authentication.service';

const getApplications = async () => {
  const { currentUser } = authenticationService;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    url: `${process.env.REACT_APP_API_URL}/accounts/${currentUser.userProfile.id}/applications`,
  };
  return axios(options);
};

const getUsers = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    url: `${process.env.REACT_APP_API_URL}/applications/${id}/applicationusers`,
  };
  return axios(options);
};

const applicationService = {
  getApplications,
  getUsers,
};
export default applicationService;
