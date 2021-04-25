import Image from "next/image";

const Song = ({ name, singers, imageUrl, songUrl, aColor, size }) => {
  return (
    <>
      <div className="main">
        <div className="player">
          <div className="image">
            <Image
              className="image-component"
              alt={name}
              src={imageUrl}
              width={100}
              height={100}
            />
          </div>
          <div className="player-right">
            <h3>{name}</h3>
            <p>{singers}</p>
            {/* <audio src={songUrl} controls preload="none" /> */}
            <div className="a">
              <img src="/icons/icons8-download-26.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <a href={songUrl} download></a>

      <style jsx>{`
        .main {
          text-align: left;
          border: 1px solid white;
          margin: 1rem;
        }

        .player {
          width: 90vw;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          position: relative;
        }

        h3 {
          z-index: 5;
        }

        p {
          padding-bottom: 10px;
          font-size: 0.9rem;
        }

        h3,
        p {
          margin: 0;
          padding-left: 4px;
        }

        audio {
          justify-content: center;
          z-index: 5;
        }

        .a {
          text-align: center;
          z-index: 5;
        }

        a {
          position: fixed;
          top: 10;
          right: 10;
        }

        a:hover {
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .bold {
          font-weight: bold;
        }
      `}</style>

      <style jsx global>{`
        .image-component {
          position: relative;
          display: inline-block;
          padding: 0;
          margin: 0;
          /* BORDER WITHOUT !IMPORTANT IS NOT WORKING AND I DON'T KNOW WHY!!!!!!!! D: */
          border: 1px solid black !important;
          border-radius: 5%;
          z-index: 5;
        }
      `}</style>
    </>
  );
};

export default Song;
