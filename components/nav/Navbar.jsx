import React from "react";
import { Burger } from "./Burger";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="logo">
        <img
          src="/icons/dalitoporlogo.png"
          alt="dali topar"
          width="65px"
          height="65px"
        />
      </div>
      <Burger />

      <style jsx>{`
        .navbar-main {
          width: 100%;
          height: auto;
          padding: 0 20px;
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
        }

        .logo {
          padding: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
