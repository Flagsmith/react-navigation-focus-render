import {useDispatch, useSelector} from 'react-redux';
import {AppActions} from '../app-actions';
import {StateType} from '../types/state-type';
import {useCallback} from 'react';

type UseCountActions = {
  setCount: (data: number) => void;
};

type UseTest = UseCountActions & {
  count: StateType['count'];
};

export function useCountActions(): UseCountActions {
  const dispatch = useDispatch();
  const setCount = useCallback(
    (data: number) => {
      return dispatch(AppActions.setCount(data));
    },
    [dispatch],
  );
  return {
    setCount,
  };
}

export default function useCount(): UseTest {
  const {count} = useSelector((state: StateType) => ({
    count: state.count,
  }));
  const {setCount} = useCountActions();
  return {
    count,
    setCount,
  };
}
