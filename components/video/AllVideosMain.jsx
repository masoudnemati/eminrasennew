import React from "react";
import AllVideosList from "./AllVideosList";

const AllSongsMain = () => {
  return (
    <>
      <div className="all-videos-main">
        <h3>تمامی موزیک ویدئوها</h3>
        <AllVideosList />
      </div>

      <style jsx>{`
        .all-videos-main {
          color: white;
          background-image: url("/images/new-songs-home/Wave-Line.svg");
          background-position: center;
          background-color: #021c3a;
          text-align: center;
          padding-top: 120px;
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
