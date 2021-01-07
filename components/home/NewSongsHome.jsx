import React from "react";
import Link from "next/link";
import NewSongList from "../NewSongList";

const NewSongsHome = () => {
  return (
    <>
      <div className="main">
        <h3>جدیدترین آهنگ ها</h3>
        <NewSongList />
        <Link href="/songs">
          <div className="new-songs-home-a-main">
            <a className="new-songs-home-a"> مشاهده تمامی آهنگ ها</a>
          </div>
        </Link>
      </div>

      <style jsx>{`
        .main {
          color: white;
          background-image: url("/images/new-songs-home/Wave-Line.svg");
          background-position: center;
          background-color: #021c3a;
          text-align: center;
          padding-bottom: 50px;
        }

        h3 {
          display: inline-block;
          margin: 0;
          padding: 20px 37px;

          background: url("/icons/icons8-new-30.png") no-repeat right center,
            url("/icons/icons8-new-30.png") no-repeat left center;
        }

        .new-songs-home-a-main {
          display: block;
          background-image: url("/images/new-songs-home/Sound Wave.svg");
          background-size: contain;
        }

        @keyframes yourAnimation {
          0.0% {
          }
          25% {
            transform: translate(-50px);
          }
          50.0% {
            transform: translate(50px);
          }
          75% {
            transform: translate(-50px);
          }
        }

        .new-songs-home-a {
          animation: yourAnimation 5s ease 0s infinite normal none;

          color: #0c1524;
          display: inline-block;
          padding: 12px;
          padding-right: 33px;
          background-color: rgba(210, 232, 237, 0.97);
          background-image: url("/icons/icons8-musical-notes-24.png");
          background-repeat: no-repeat;
          background-position: 165px center;
          cursor: pointer;
        }

        .new-songs-home-a:hover {
          color: white;
          background-color: black;
        }
      `}</style>
    </>
  );
};

export { NewSongsHome };
