import React, { useCallback, useState } from 'react';

type ButtonProps = {
  onClick: () => void;
};

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log('DecrementButtonが描画されました');

  return <button onClick={onClick}>Decrement</button>;
};

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('IncrementButtonが描画されました');

  return <button onClick={onClick}>Increment</button>;
});

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('DoubleButtonが描画されました');

  return <button onClick={onClick}>Double</button>;
});

export const Counter2 = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const increment = () => {
    setCount((c) => c + 1);
  };
  // useCallbackを使って関数をメモ化する
  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []); // 第２引数は空配列なので、useCallbackは常に同じ関数を返す

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  );
};
