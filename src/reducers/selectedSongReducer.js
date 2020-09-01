const initialState = {
  selected: [1, 2],
  item: 99,
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
