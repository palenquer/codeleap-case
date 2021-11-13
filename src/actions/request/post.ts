import API from '../../services/api';

export default function postApi(username: string, title: string, content: string) {
  const data = API.post('/', {
    username,
    title,
    content,
  })
    .then((response) => response.data)
    .catch((err) => console.error(err));

  return data;
}
