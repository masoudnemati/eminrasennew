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
          height: 105px;
          margin: 0;
          padding: 0 20px;
          background-color: rgba(12, 21, 34, 0.95);
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid black;
          transition: 0.8s;
        }

        .navbar-scroll {
          color: black;
          background-color: rgba(255, 255, 255, 0.94);
          padding: 0 20px;
          height: 90px;
        }
        .logo {
          background-color: white;
          border: 1px 0 solid white;
          border-radius: 0 0 40% 40%;
          padding-top: 7px;
          margin-bottom: 22px;
          margin-left: 20px;
        }

        /* img {
          padding: 0 0 2px 0;
        } */
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
