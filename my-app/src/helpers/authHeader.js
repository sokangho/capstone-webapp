import authenticationService from '../services/authentication.service';

export default function authHeader() {
  const { currentUser } = authenticationService;

  if (currentUser && currentUser.token) {
    return {
      Authorization: `Bearer ${currentUser.token}`
    };
  }
  return {};
}
