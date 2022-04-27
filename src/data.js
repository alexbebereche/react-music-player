// piece of state of our app, separated in one file, as it is big

import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Lose Her Way",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31589",
      color: ["#EF8EA8", "#ab414f"],
      id: uuidv4(),
      active: "true",
    },
    {
      name: "Song2",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg",
      artist: "C Y G N2",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31612",
      color: ["#EF8EA8", "#ab414f"],
      id: uuidv4(),
      active: "false",
    },
  ];
}

export default chillHop;
