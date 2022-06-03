import React, { useEffect, useReducer, useState } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0); // 숫자일 수도 있고 null 일수도 있을때 generic 사용
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
