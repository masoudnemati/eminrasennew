import React, { useState } from "react";
import { RightNav } from "./RightNav";

export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="burger-main" onClick={() => setOpen(!open)}>
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />

        <style jsx>{`
          .burger-main {
            width: 2rem;
            height: 2rem;
            position: fixed;
            top: 15px;
            right: 20px;
            
            z-index: 20;
            display: none;
          }

          .burger {
            width: 2rem;
            height: 0.25rem;
            background-color: ${open ? "red" : "blue"};
            transform-origin: 1px;
            transition: all 0.3s linear;
          }

          .burger1 {
            transform: ${open ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            transform: ${open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${open ? "0" : "1"};
            width: 1.5rem;
          }
          .burger3 {
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
      </main>
      <RightNav open={open} />
    </>
  );
};
