import { combineReducers } from "redux";


const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "No scs", duration: "1:05" },
    { title: "t scrubs", duration: "3:05" },
    { title: "v scrubs", duration: "2:05" },
    { title: "New song", duration: "2:05" },
  ];
};

const selectedSongReducer = (selecdSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  if (action.type === "SELECTED_SONG") {
    return {
      selecdSong: selecdSong,
    };
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
