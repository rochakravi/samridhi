const initialState = {
  counter: 0,
  items: [],
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
      items: state.items.concat(state.counter),
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  return state;
};

export default counterReducer;
