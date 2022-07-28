import React, { memo, useCallback, useState } from 'react';

// useCallbackとuseMemoを確認

type FizzProps = {
  isFizz: boolean;
};

// Fizzは通常の関数コンポーネント
// isFizzがtrueの場合はFizzと表示し、それ以外は表示しない
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizzが描画されました, isFizz=${isFizz}`);
  return <span>{isFizz ? 'Fizz' : ''}</span>;
};

type BuzzProps = {
  isBuzz: boolean;
  // propsにonClickを追加
  onClick: () => void;
};

// Buzzはメモ化した関数コンポーネント
// isBuzzがtrueの場合はBuzzと表示し、それ以外は表示しない
// 親コンポーネントが再描画されてもい、izBuzzが変化しない限りはBuzzは再描画しない
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props;
  console.log(`Buzzが描画されました, isBuzz=${isBuzz}`);
  return <span>{isBuzz ? 'Buzz' : ''}</span>;
});

export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  // この関数はParentの再描画の度に作成される
  // => 再描画の旅にParentで新しく作られた関数がBuzzに渡されるため
  const onBuzzClick = useCallback(() => {
    console.log(`Buzzがクリックされました, isBuzz=${isBuzz}`);
  }, []);

  console.log('Parentが描画');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </div>
  );
};
