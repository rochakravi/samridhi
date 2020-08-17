import * as action_types from "./../actions";

const initialState = {
  counter: 5,
  items: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        items: state.items.concat(state.counter),
      };
    case action_types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }

  return state;
};

export default counterReducer;
