import api from './api';
import createHeaders from './headers';

const config = createHeaders();

export function upsertUserInfoApi({picture, nickname, status, id}) {
  const response = api.post(`/board/info/${id}`, {picture, nickname, status}, config);
  return response;
}

export function getUserInfoApi(id) {
  const response = api.get(`/board/info/${id}`, config);
  return response;
}
