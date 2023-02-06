import api from './api';
import createHeaders from './headers';

const config = createHeaders();

export function createWarningApi({ id, text }) {
  console.log({text})
  const response = api.post(`/board/warning/${id}`, { text }, config);
  return response;
}

export function getWarningsApi(id) {
  const response = api.get(`/board/warning/${id}`, config);
  return response;
}
