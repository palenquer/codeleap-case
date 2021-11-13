import API from '../../services/api';

export default function patchApi(id: number, title: string, content: string) {
  const data = API.patch(`${id}/`, {
    title,
    content,
  })
    .then((response) => response.data)
    .catch((err) => console.error(err));

  return data;
}
