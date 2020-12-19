import React from "react";

const NewSongsHome = () => {
  return (
    <>
      <div className="main">
        <h3>جدیدترین آهنگ ها</h3>
      </div>
      <style jsx>{`
        .main {
          text-align: center;
          background-image: linear-gradient(#070d18, rgb(0, 0, 0));
        }

        h3 {
          color: white;
          margin: 0;
          padding: 30px;
        }
      `}</style>
    </>
  );
};

export default NewSongsHome;
