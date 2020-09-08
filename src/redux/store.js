import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

const initialState = {
  counter: 0,
  currentColor: '',
  gameStap: 0,
  colors: ['green', 'green', 'green', 'green'],
  numWin: 0,
};

const store = createStore(rootReducer, initialState);

export default store;