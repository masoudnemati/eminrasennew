import React from "react";
import AllSongsList from "./AllSongsList";

const AllSongsMain = () => {
  return (
    <>
      <div className="all-songs-main">
        <h3>تمامی آهنگ ها</h3>
        <AllSongsList />
      </div>

      <style jsx>{`
        .all-songs-main {
          color: white;
          background-image: url("/images/new-songs-home/Wave-Line.svg");
          background-position: center;
          background-color: #021c3a;
          text-align: center;
          padding-top: 150px;
          padding-bottom: 50px;
        }

        h3 {
          display: inline-block;
          margin: 0;
          padding: 20px 37px;
        }
      `}</style>
    </>
  );
};

export default AllSongsMain;
