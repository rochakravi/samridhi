const initialState = {
  selected: [],
};

const selectedSongReducer = (state = initialState, action) => {
  if (action.type === "SELECTED_SONG") {
    return {
      ...state,
      selected: state.selected.concat(action.payload),
    };
  }

  return state;
};

export default selectedSongReducer;
