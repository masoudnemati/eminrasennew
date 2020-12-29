import React from "react";
import NewSongList from "../NewSongList";

const NewSongsHome = () => {
  return (
    <>
      <div className="main">
        <h3>جدیدترین آهنگ ها</h3>
        <NewSongList />
      </div>

      <style jsx>{`
        .main {
          color: white;
          background-color: #011122;
          text-align: center;
        }

        h3 {
          display: inline-block;
          margin: 0;
          padding: 20px 37px;

          background: url("/icons/icons8-new-30.png") no-repeat right center,
            url("/icons/icons8-new-30.png") no-repeat left center;
        }
      `}</style>
    </>
  );
};

export { NewSongsHome };
