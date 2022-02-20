import {createStore, Store} from 'redux';
import rootReducer from './reducer';
import {StateType} from './types/state-type';

let store: Store & {};

export default function _store(
  initialState: StateType = {},
  forceNewStore = false,
) {
  // It's very important to only return the cached store on the client, otherwise SSR will return the previous request state
  // @ts-ignore
  if (
    store &&
    (typeof window !== 'undefined' || global.__JEST__ !== 'undefined') &&
    !forceNewStore
  ) {
    return store;
  }
  store = createStore(rootReducer, initialState);
  return store;
}
