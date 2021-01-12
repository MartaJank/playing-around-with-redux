import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "All Star",
      duration: "3:57",
    },
    {
      title: "Smells Like Teen Spirits",
      duration: "4:39",
    },
    {
      title: "Psychosocial",
      duration: "5:03",
    },
    {
      title: "Lateralus",
      duration: "9:25",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
