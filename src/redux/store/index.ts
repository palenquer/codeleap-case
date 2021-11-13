import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';
import { IUserState } from '../../types/user';

export interface IState {
  user: IUserState;
}

const store = createStore(rootReducer);

export default store;
