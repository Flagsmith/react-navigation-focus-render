import produce, {enableES5} from 'immer';
import {Actions} from './app-actions';
import {StateType} from './types/state-type';
enableES5(); // required for react native hermes

const defaultReducer = produce((state: StateType, action): StateType | void => {
  switch (action.type) {
    case Actions.SET_COUNT:
      state.count = action.data;
      return;
    default:
      break;
  }
}, {});

export default defaultReducer;
