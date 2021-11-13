import API from '../../services/api';

export default function deleteApi(id: number) {
  const data = API.delete(`${id}/`)
    .then(() => true)
    .catch((err) => console.error(err));

  return data;
}
