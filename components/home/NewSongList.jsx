import React, { useState } from "react";
import Song from "../Song";
import newSongsData from "../../data/newSongsData";

const SongList = () => {
  const [songs] = useState(() => newSongsData);
  return (
    <>
      <div className="main">
        {songs.map((song) => (
          <Song
            name={song.name}
            key={song.id}
            singers={song.singers}
            imageUrl={song.imageUrl}
            songUrl={song.songUrl}
            aColor={song.aColor}
            size={song.size}
          />
        ))}
      </div>

      <style jsx>{`
        .main {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 50px;
        }
      `}</style>
    </>
  );
};

export default SongList;
