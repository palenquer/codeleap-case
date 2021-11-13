import { IUserState } from '../../types/user';

export default function getUser(username: IUserState) {
  return {
    type: 'GET_USER',
    payload: {
      username,
    },
  };
}
