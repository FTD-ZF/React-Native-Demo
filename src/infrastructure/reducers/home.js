import { ADD, DEL, RESET} from '../constants/actionsTypes';

// 原始默认state
const defaultState = {
  count: 5,
  factor: 1
}

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + state.factor };
    case DEL:
      return { ...state, count: state.count - state.factor };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default counter
