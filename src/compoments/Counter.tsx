// import React, { useState } from 'react';

// type CounterProps = {
//   initialValue: number;
// };

// const Counter = (props: CounterProps) => {
//   const { initialValue } = props;
//   const [count, setCount] = useState<number>(initialValue);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
//     </div>
//   );
// };

// const CounterWrapper = (props: {}) => {
//   return <Counter initialValue={0} />;
// };
// export default CounterWrapper;

import React, { useReducer, useState } from 'react';

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';
// 現在の状態とactionに基づいて次の状態を返す
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1;
    case 'DECREMENT':
      return currentCount - 1;
    case 'DOUBLE':
      return currentCount * 2;
    case 'RESET':
      return 0;
    default:
      return currentCount;
  }
};

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>Count: {count}</p>
      {/* dispatch関数にactionを渡して、状態を更新 */}
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DOUBLE')}>×2</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  );
};

const CounterWrapper = (props: {}) => {
  return <Counter initialValue={0} />;
};
export default CounterWrapper;
