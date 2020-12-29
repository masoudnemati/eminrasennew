import React, { useState } from "react";
import Song from "./Song";

const SongList = () => {
  const [songs, setSongs] = useState(() => [
    {
      id: "1",
      name: "Hedeh",
      singers: ["Emin Rasen"],
      imageUrl: "/images/eminrasenhero.webp",
    },
    {
      id: "2",
      name: "YADADİM",
      singers: ["Emin Rasen, ", "DarKray, ", "Begmyrat_K"],
    },
    {
      id: "3",
      name: "Galmagal",
      singers: ["Emin Rasen, ", "Alma"],
    },
  ]);
  return (
    <>
      <div className="main">
        {songs.map((song) => (
          <Song name={song.name} key={song.id} singers={song.singers} />
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
