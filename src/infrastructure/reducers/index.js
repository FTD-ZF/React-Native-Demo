import { combineReducers } from 'redux';
import redux from './demo/redux';
import nav from './base/nav';

const rootReducer = combineReducers({
  redux,
  nav
});

export default rootReducer;
