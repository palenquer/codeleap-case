import { Reducer } from 'redux';
import { IUserState } from '../../types/user';

const INITIAL_STATE: IUserState = { username: '' };

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER': {
      const { username } = action.payload;

      return username;
    }
    default: {
      return state;
    }
  }
};

export default user;
