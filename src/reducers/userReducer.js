const iniialState = { isAuth: false };
const userReducer = (state = iniialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuth: true };
    case "LOGOUT":
      return { ...state, isAuth: false };
    default:
      return state;
  }

  return state;
};

export default userReducer;
