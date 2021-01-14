import React from "react";
import Link from "next/link";

const SeeAllVideoes = () => {
  return (
    <>
      <div className="see-all-vid-main">
        <video
          width="480"
          className="bg-video"
          src="/images/see-all-videoes/see-all-videoes-bg.mp4"
          autoPlay
          muted
          loop
        />
        <Link href="/video">
          <p className="see-all-vid-p">مشاهده تمامی موزیک ویدئوها</p>
        </Link>
      </div>
      <style jsx>{`
        .see-all-vid-main {
          position: relative;
          width: 100%;
          text-align: center;
        }

        .bg-video {
          display: block;
          margin: 0 auto;
          width: 100%;
        }

        .see-all-vid-p {
          color: snow;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid white;
          border-radius: 10px;
          display: inline-block;
          padding: 15px;
          top: 50%;
          left: 15%;
          right: 15%;
          cursor: pointer;
        }

        .see-all-vid-p:hover {
          color: black;
          background-color: rgba(255, 255, 255, 0.7);
          border: 1px solid black;
        }
      `}</style>
    </>
  );
};

export default SeeAllVideoes;
