import axios from 'axios';
import authHeader from '../helpers/authHeader';
import authenticationService from './authentication.service';

//Return a collection of Applications belonging to the current user
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

//Return a collection of Users belonging to a specific Application
const getUsers = async id => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader()
    },
    url: `${process.env.REACT_APP_API_URL}/applications/${id}/applicationusers`
  };
  return axios(options);
};

//Returns an Application with the provided Application Id
const getApplicationById = async id => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader()
    },
    url: `${process.env.REACT_APP_API_URL}/applications/${id}`
  };
  return axios(options);
};

//Updates a given Application's OTP configuration settings to the specified values
const updateOtpSettings = async (id, otpLifetime, otpLength) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader()
    },
    data:{
      otpLength: otpLength,
      otpLifetime: otpLifetime
    },
    url: `${process.env.REACT_APP_API_URL}/applications/${id}`
  };
  return axios(options);
};

const applicationService = {
  getApplications,
  getUsers,
  getApplicationById,
  updateOtpSettings
};
export default applicationService;
