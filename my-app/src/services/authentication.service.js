import axios from 'axios';

export const authenticationService = {
  login,
  logout,
  get currentUser() {
    return localStorage.getItem('currentUser');
  },
};

async function login(username, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { username: username, password: password },
    url: `${process.env.REACT_APP_API_URL}/accounts/login`,
  };

  const res = await axios(options);

  if (res.status === 200) {
    localStorage.setItem('currentUser', JSON.stringify(res.data));
    return res.body;
  }

  return null;
}

function logout() {
  localStorage.removeItem('currentUser');
}

// function getCurrentUser() {
//   return localStorage.getItem('currentUser');
// }
