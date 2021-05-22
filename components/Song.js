import Image from "next/image";

const Song = ({ name, singers, imageUrl, songUrl }) => {
  return (
    <>
      <div className="main">
        <img
          className="image-component"
          alt={name}
          src={imageUrl}
          width="85"
          height="85"
        />
        <div className="names">
          <h3>{name}</h3>
          <p>{singers}</p>
        </div>
      </div>

      <style jsx>{`
        .main {
          position: relative;
          text-align: left;
          border: 1px solid white;
          border-radius: 5px;
          margin: 1rem;
          cursor: pointer;
          width: 90vw;
          max-width: 500px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
        }

        .main::before {
          position: absolute;
          top: 0;
          left: -75%;
          z-index: 2;
          display: block;
          content: "";
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          transform: skewX(-25deg);
        }

        .main:hover::before {
          -webkit-animation: shine 0.75s;
          animation: shine 0.75s;
        }
        @-webkit-keyframes shine {
          100% {
            left: 125%;
          }
        }
        @keyframes shine {
          100% {
            left: 125%;
          }
        }

        img {
          display: inline;
          padding: 0;
          margin: 0;
          border: 1px solid black !important;
          border-radius: 5%;
        }

        .names {
          display: flex;
          flex-direction: column;
          padding-top: 0.4rem;
          padding-left: 0.4rem;
        }

        p {
          font-size: 0.9rem;
        }

        h3,
        p {
          display: inline;
          padding: 0;
          margin: 0;
        }

        @media only screen and (max-width: 780px) {
          .main {
            border: none;
            margin: 0.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default Song;
