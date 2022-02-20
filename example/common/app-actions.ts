import {AnyAction} from 'redux';

export const Actions = {
  SET_COUNT: 'SET_COUNT',
};

// @ts-ignore
export const AppActions = {
  setCount(data): AnyAction {
    return {
      type: Actions.SET_COUNT,
      data,
    };
  },

  // END OF APP_ACTIONS
};
