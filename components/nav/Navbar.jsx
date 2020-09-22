import React from "react";
import { Burger } from "./Burger";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="logo">
        <img
          src="/icons/dalitoporlogo.png"
          alt="dali topar"
          width="69px"
          height="69px"
        />
      </div>
      <Burger />

      <style jsx>{`
        .navbar-main {
          width: 100%;
          height: auto;
          padding: 0 20px;
          background-color: rgba(255, 255, 255, 0.97);
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
        }

        .logo {
          padding: 8px 0;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
