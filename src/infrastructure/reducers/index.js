import { combineReducers } from 'redux';
import redux from './demo/redux';
import saga from './demo/saga';
import nav from './base/nav';

const rootReducer = combineReducers({
  redux,
  saga,
  nav
});

export default rootReducer;
