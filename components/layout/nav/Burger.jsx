import React, { useState } from "react";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="burger-main" onClick={() => setOpen(!open)}>
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />

        <style jsx>{`
          .burger-main {
            width: 2rem;
            height: 2rem;
            position: fixed;
            top: 30px;
            right: 20px;
            z-index: 20;
            display: none;
            margin-right: 10px;
          }

          .burger {
            width: 2rem;
            height: 0.25rem;
            background-color: ${open ? "red" : "white"};
            border: 1px solid black;
            transform-origin: 1px;
            transition: all 0.3s linear;
          }

          .burger1 {
            width: 2rem;
            transform: ${open ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            transform: ${open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${open ? "0" : "1"};
            width: 1.5rem;
          }
          .burger3 {
            width: 2rem;
            transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
          }

          @media only screen and (max-width: 780px) {
            .burger-main {
              display: flex;
              justify-content: space-around;
              flex-flow: column nowrap;
            }
          }
        `}</style>
      </aside>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
