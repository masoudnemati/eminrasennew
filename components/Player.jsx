import { useState } from "react";

const Player = () => {
  const [showPlayer, setShowPlayer] = useState(true);

  return (
    <>
      <div className={`${showPlayer ? "main" : "hide"}`}>
        <section className="player-top">
          <img
            className="back-icon"
            width="50"
            src="/icons/music-player/icons8-left-24.png"
            alt="back"
            onClick={() => {
              setShowPlayer(!showPlayer);
            }}
          />
          <div className="names">
            <h3>Music Name</h3>
            <p>singers names</p>
          </div>
        </section>
        <img
          className="song-image"
          width="350"
          src="/songs-images/alma.webp"
          alt="song"
        />
      </div>

      <style jsx>{`
        .main {
          z-index: 9999999;
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: black;
          line-height: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .hide {
          display: none;
        }

        .player-top {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-start;
          padding-top: 1rem;
          margin-left: -190px;
        }

        .back-icon {
          cursor: pointer;
          margin: 0.5rem;
          padding: 0.1rem;
        }

        .back-icon:hover {
          background-color: red;
        }

        .names {
          padding-top: 1rem;
        }

        .song-image {
          border-radius: 3%;
        }

        h3,
        p {
          padding: 0;
          margin: 0;
        }

        p {
          color: gray;
        }
      `}</style>
    </>
  );
};

export default Player;
