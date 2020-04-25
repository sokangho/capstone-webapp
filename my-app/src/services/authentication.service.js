function login(username, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { username: credential.username, password: credential.password },
    url: `${process.env.REACT_APP_API_URL}/accounts/login`
  };

  const res = await axios(options);

  if (res.status === 200) {
    localStorage.setItem('currentUser', JSON.stringify(res.body));
  }
}