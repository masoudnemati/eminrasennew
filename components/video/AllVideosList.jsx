import React, { useState } from "react";
import Video from "../Video";
import allVideosData from "../../data/allVideosData";

const AllVideosList = () => {
  const [videos] = useState(() => allVideosData);

  return (
    <>
      <section className="videos-list-main">
        {videos.map((video) => (
          <Video
            name={video.name}
            key={video.id}
            singers={video.singers}
            posterUrl={video.posterUrl}
            videoUrl={video.videoUrl}
          />
        ))}
      </section>

      <style jsx>{`
        .videos-list-main {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 50px;
        }
      `}</style>
    </>
  );
};

export default AllVideosList;
