import React from "react";

const Back = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="{10}"
        fill="#fff"
        height="{10}"
        viewBox="0 0 20 20"
      >
        <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z" />
      </svg>

      <style jsx>{`
        svg {
          cursor: pointer;
          margin: 1rem 0.5rem 0 0;
          width: 40px;
          height: 30px;
        }

        svg:hover {
          fill: red;
        }
      `}</style>
    </>
  );
};

export default Back;
