import React from "react";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <header className="navbar-main ">
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
          position: fixed;
          color: white;
          width: 100%;
          height: 80px;
          margin: 0;
          padding: 0;
          background-color: rgba(12, 21, 34, 0.95);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid black;
          transition: all 0.5s linear;
          z-index: 10;
        }

        .navbar-scroll {
          box-sizing: content-box;
          color: black;
          background-color: rgba(255, 255, 255, 0.94);
          margin-top: -5px;
          height: 70px;
        }

        .logo {
          overflow: hidden;
          background-color: rgba(255, 255, 255);
          border: 1px 0 solid white;
          border-radius: 0 0 35% 35%;
          padding: 15px 0 0 0;
          margin: 0 5vw 0 5vw;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }
      `}</style>
    </header>
  );
};

if (typeof window !== "undefined") {
  // browser code
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("navbar-scroll", window.scrollY > 0);
  });
}

export default Navbar;
