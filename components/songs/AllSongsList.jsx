import React, { useState } from "react";
import Song from "../Song";
import allSongsData from "../../data/allSongsData";

const SongsMain = () => {
  const [songs] = useState(() => allSongsData);

  return (
    <>
      <div className="all-songs-list">
        {songs.map((song) => (
          <Song
            key={song.id}
            name={song.name}
            singers={song.singers}
            imageUrl={song.imageUrl}
            songUrl={song.songUrl}
            // aColor={song.aColor}
            size={song.size}
          />
        ))}

        <style jsx>{`
          .all-songs-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding-bottom: 50px;
          }
        `}</style>
      </div>
    </>
  );
};

export default SongsMain;
