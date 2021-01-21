const Video = ({ name, singers, videoUrl, posterUrl }) => {
  return (
    <>
      <section className="video-main">
        <video
          type="video/mp4"
          width="100%"
          src={videoUrl}
          controls
          preload="none"
          poster={posterUrl}
        >
          Your browser does not support the video tag.
        </video>
        <h4>{name}</h4>
        <p>{singers}</p>
      </section>

      <style jsx>{`
        .video-main {
          background-color: black;
          position: relative;
          text-align: left;
          border: 1px solid white;
          border: 5px solid #01203f4b;
          border-radius: 0 0 20% 20%;
          width: 100%;
          max-width: 600px;
          padding-left: 20px;
          padding-right: 20px;
          margin: 15px;
        }

        h4 {
          font-family: "Audiowide", cursive;
          margin: 0;
        }

        p {
          position: relative;
          padding-bottom: 30px;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
};

export default Video;
