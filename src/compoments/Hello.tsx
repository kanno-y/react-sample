import React from 'react';

const Hello = () => {
  const onClick = () => {
    alert('クリックされました。');
  };

  const text = 'Hello, React';

  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Hello;
