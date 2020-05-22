import axios from 'axios';

function logout() {
  localStorage.removeItem('currentUser');
}

async function login(username, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { username, password },
    url: `${process.env.REACT_APP_API_URL}/accounts/login`
  };

  const res = await axios(options);

  if (res.status === 200) {
    localStorage.setItem('currentUser', JSON.stringify(res.data));
    return res.data;
  }

  return null;
}

const authenticationService = {
  login,
  logout,
  get currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
};

export default authenticationService;
