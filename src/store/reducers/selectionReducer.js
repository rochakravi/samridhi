const initialState = {
  wishlist: [],
  cart: [],
};

const selectionReducer = (state = initialState, action) => {
  if (action.type === "ADD_ITEM_TO_WISHLIST") {
    return {
      ...state,
      wishlist: state.wishlist.concat(action.payload),
    };
  }
  if (action.type === "ADD_ITEM_TO_CART") {
    return {
      ...state,
      cart: state.cart.concat(action.payload),
    };
  }
  if (action.type === "REMOVE_ITEM_FROM_WISHLIST") {
    return {
      ...state,
      wishlist: state.wishlist.filter(
        (item, index) => index !== action.payload
      ),
    };
  }

  if (action.type === "REMOVE_ITEM_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item, index) => index !== action.payload),
    };
  }

  return state;
};

export default selectionReducer;
