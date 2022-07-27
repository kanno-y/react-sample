import React, { ReactNode } from 'react';
import { JsxElement } from 'typescript';

type ContainerProps = {
  title: string;
  children: ReactNode;
};
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;
  return (
    <div style={{ backgroundColor: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const Parent = (): JSX.Element => {
  return (
    <Container title='hello'>
      <p>ここの部分が表示される</p>
    </Container>
  );
};

export default Parent;
