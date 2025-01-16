import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="list-item mt-16">
        <Sidebar />
        <div className="flex-1 ml-16 ">
          <Navbar />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
