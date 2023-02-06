import api from './api';
import createHeaders from './headers';

const config = createHeaders();

export function sendMessageApi({message, id}) {
  const response = api.post(`/board/message/${id}`, {message}, config);
  return response;
}

export function getMessagessApi(id) {
  const response = api.get(`/board/message/${id}`, config);
  return response;
}
