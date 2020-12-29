const Song = ({ name, singers, imageUrl }) => {
  return (
    <>
      <div className="main">
        <img
          src="/images/eminrasenhero.webp"
          width="300"
          height="300"
          alt="test"
        />
        <h3>{name}</h3>
        <p>{singers}</p>
        <audio src="" controls preload="none" />
        <div className="a">
          <a href={singers} download={name}>
            Download MP3
          </a>
        </div>
      </div>

      <style jsx>{`
        .main {
          text-align: left;
          border: 1px solid white;
          border: 5px solid #01203f4b;
          border-radius: 0 0 20% 20%;
          width: 350px;
          padding-left: 20px;
          background-color: #011931;
          margin: 15px;
        }

        h3 {
          margin: 0;
        }

        p {
          margin: 0;
          padding-bottom: 10px;
          font-size: 0.9rem;
        }

        audio {
          justify-content: center;
        }

        .a {
          text-align: center;
        }

        a {
          display: inline-block;
          padding: 12px;
          padding-left: 35px;
          font-size: 0.9rem;
          border: 2px solid #000d1a;
          border-radius: 0 0 25% 25%;
          margin-bottom: 5px;
          background-image: url("/icons/icons8-download-26.png");
          background-repeat: no-repeat;
          background-size: 17px;
          background-position: 10px center;
          background-color: #011122;
        }

        a:hover {
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
};

export default Song;
