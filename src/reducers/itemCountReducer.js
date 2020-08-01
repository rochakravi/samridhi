const initialState = {
  count: 10,
};

const itemCountReducer = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state;
};

export default itemCountReducer;
