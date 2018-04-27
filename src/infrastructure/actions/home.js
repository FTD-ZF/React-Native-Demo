import { ADD, DEL, RESET } from '../constants/actionsTypes';

const add = () => ({ type: ADD });
const del = () => ({ type: DEL });
const reset = () => ({ type: RESET });

export {
    add,
    del,
    reset
}
