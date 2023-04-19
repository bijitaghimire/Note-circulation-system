import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex vh-100">
      {/* <TopMenu /> */}
      <Sidebar />
      <main className=" mxw-lg vw-100">
        {children}
        <Outlet />
        
      </main>
    </div>
  );
}

export default Layout;
