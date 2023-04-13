import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* <TopMenu /> */}
      <Sidebar />
      <main className=" mx-auto max-w-screen">
        {children}
        <Outlet />
        <div>hi</div>
      </main>
    </div>
  );
}

export default Layout;
