const Song = ({ name, singers, imageUrl, songUrl, aColor, size }) => {
  return (
    <>
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
        <div className="bg"></div>
      </div>

      <style jsx>{`
        .main {
          position: relative;
          text-align: left;
          border: 1px solid white;
          border: 5px solid #01203f4b;
          border-radius: 0 0 20% 20%;
          width: 360px;
          padding-left: 20px;
          padding-right: 20px;
          margin: 15px;
        }

        .bg {
          position: absolute;
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          background-color: black;
          background-image: url(${imageUrl});
          background-position: top;
          background-repeat: repeat-x;
          background-size: 320px;
          filter: blur(5px);
          overflow: hidden;
          border-radius: 0 0 20% 20%;
          z-index: 0;
        }

        .image {
          text-align: center;
        }

        img {
          position: relative;
          display: inline-block;
          padding: 0;
          margin: 0;
          border: 1px solid black;
          border-radius: 5%;
          z-index: 5;
        }

        h3 {
          position: relative;
          z-index: 5;
        }

        p {
          position: relative;

          padding-bottom: 10px;
          font-size: 0.9rem;
          z-index: 5;
        }

        h3,
        p {
          margin: 0;
          padding-left: 4px;
        }

        audio {
          position: relative;

          justify-content: center;
          position: relative;
          z-index: 5;
        }

        .a {
          position: relative;

          text-align: center;
          z-index: 5;
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
