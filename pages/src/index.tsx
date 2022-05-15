import React, { Suspense, lazy, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { StoreProvider } from './store';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const UserList = lazy(() => import(
  /*webpackChunckName:"UserList"*/ './user'
));

const Main = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/userList" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
