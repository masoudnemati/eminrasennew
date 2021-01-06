const Song = ({ name, singers, imageUrl, songUrl, bgColor, aColor, size }) => {
  return (
    <>
      <div className="bg"></div>
      <div className="main">
        <div className="image">
          <img src={imageUrl} width="300" height="300" alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{singers}</p>
        <audio src={songUrl} controls preload="none" />
        <div className="a">
          <a href={songUrl} download>
            <span className="bold">Download</span> (size: {size})
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
          padding-right: 20px;
          margin: 15px;
          background-color: ${bgColor};
        }

        .image {
          text-align: center;
        }

        img {
          display: inline-block;
          padding: 0;
          margin: 0;
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
          position: relative;
          z-index: 0;
        }

        .a {
          text-align: center;
        }

        a {
          display: inline-block;
          padding: 12px;
          padding-left: 35px;
          font-size: 0.9rem;
          border: 2px solid ${aColor};
          border-radius: 0 0 25% 25%;
          margin-bottom: 15px;
          background-image: url("/icons/icons8-download-26.png");
          background-repeat: no-repeat;
          background-size: 17px;
          background-position: 10px center;
          background-color: ${aColor};
        }

        a:hover {
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .bold {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Song;
