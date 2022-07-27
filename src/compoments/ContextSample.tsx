import React from 'react';

// Tilteを渡すためのContextを作成
const TitleContext = React.createContext('');

// Titleコンポーネントの中でContextを参照
const Title = () => {
  // Consumerを使って、Contextの値を参照
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = 'React Book';

  // Providerを使いContextに値をセット
  // Provider以下のコンポーネントから値を参照
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
