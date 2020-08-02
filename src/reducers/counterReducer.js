const initialState = {
  counter: 0,
  items: [],
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
      items: state.items.concat(action.item),
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      // items: state.items.concat({ name: "pend", price: 10 }),
      items: state.items.concat(state.counter),
    };
  }
  return state;
};

export default counterReducer;
