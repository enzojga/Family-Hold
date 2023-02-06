import api from './api';

export function signInApi({username, password}) {
  const response = api.post('/signin', {username, password});
  return response;
}

export function signUpApi({username, password}) {
  console.log(username, password);
  const response = api.post('/signup', {username, password});
  return response;
}
