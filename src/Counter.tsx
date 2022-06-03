import React, { useEffect, useState } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

const Counter = () => {
  const [count, setCount] = useState(0); // 숫자일 수도 있고 null 일수도 있을때 generic 사용
  const onIncrease = () => setCount((prevCount) => prevCount + 1);
  const onDecrease = () => setCount((prevCount) => prevCount - 1);

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
