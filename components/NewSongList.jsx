import React, { useState } from "react";
import Song from "./Song";

const SongList = () => {
  const [songs] = useState(() => [
    {
      id: "1",
      name: "Hedeh?",
      singers: ["Emin Rasen"],
      imageUrl:
        "https://5fb7b43e5042ef0018e4bae7.iran.liara.space/eminrasen-images/hedeh.webp",
      songUrl:
        "https://5fb7b43e5042ef0018e4bae7.iran.liara.space/eminrasen-songs/HEDEH%20.mp3",
      size: "12MB",
      aColor: "#420008",
    },
    {
      id: "2",
      name: "YADADİM",
      singers: ["Emin Rasen, ", "DarKray, ", "Begmyrat_K"],
      imageUrl:
        "https://5fb7b43e5042ef0018e4bae7.iran.liara.space/eminrasen-images/yadadim.webp",
      songUrl:
        "https://5fb7b43e5042ef0018e4bae7.iran.liara.space/eminrasen-songs/Yadadym.mp3",
      size: "9MB",
      aColor: "#191B1C",
    },
    {
      id: "3",
      name: "Galmagal",
      singers: ["Emin Rasen, ", "Alma"],
      imageUrl:
        "https://5fb7b43e5042ef0018e4bae7.iran.liara.space/eminrasen-images/galmagal.webp",
      songUrl:
        "https://5fb7b43e5042ef0018e4bae7.iran.liara.space/eminrasen-songs/%5BGALMAGAL%5D%20-%20EMIN%26ALMA%20ft%20LA%20BLAZE.mp3",
      size: "13MB",
      aColor: "#224E5B",
    },
  ]);
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
