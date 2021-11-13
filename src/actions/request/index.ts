import API from '../../services/api';

export default function getApi() {
  const data = API.get('/')
    .then((response) => response.data)
    .catch((err) => console.error(err));

  return data;
}
