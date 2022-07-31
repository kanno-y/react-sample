import React from 'react';
import ReactDOM from 'react-dom/client';
import { Clock } from './compoments/Clock';
import { Counter2 } from './compoments/Counter2';
import { Parent } from './compoments/Parent';
import { UseMemoSample } from './compoments/UseMemoSample';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hello from './compoments/Hello';
// import Parent from './compoments/ContainerSample';
// import Page from './compoments/ContextSample';
// import CounterWrapper from './compoments/Counter';
import { ContextSample2 } from './compoments/ContextSample2';
import { ImageUploader } from './compoments/ImageUploader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Parent /> */}
    {/* <Page /> */}
    {/* <CounterWrapper /> */}
    {/* <Parent /> */}
    {/* <Counter2 /> */}
    {/* <UseMemoSample /> */}
    {/* <Clock /> */}
    {/* <ContextSample2 /> */}
    <ImageUploader />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
