import { createStore } from 'redux';

const initStat = { count: 0, chowCounter: true };

const CounterReducer = (state = initStat, action) => {
  if (action.type === 'INCREASE') {
    return { ...state, count: state.count + action.payload.val };
  }

  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - action.payload.val };
  }

  if (action.type === 'TOGGLE_COUNTER') {
    return { ...state, chowCounter: !state.chowCounter };
  }

  return state;
};

export const store = createStore(CounterReducer);
