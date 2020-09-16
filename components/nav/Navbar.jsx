import React from "react";
import { Burger } from "./Burger";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="logo">Logo</div>
      <Burger />

      <style jsx>{`
        .navbar-main {
          width: 100%;
          height: auto;
          padding: 0 20px;
          background: rgba(255, 255, 255, 0.97);
          display: flex;
          justify-content: space-between;
        }

        .logo {
          padding: 15px 0;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
