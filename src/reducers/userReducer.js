const iniialState = { isAuth: "false" };
const userReducer = (state = iniialState, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuth: "true",
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuth: "false",
    };
  }
  return state;
};

export default userReducer;
