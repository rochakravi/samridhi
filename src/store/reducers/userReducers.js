import LOGIN from "../action/index";
import LOGOUT from "../action/index";

const iniialState = {
  isAuth: false,
  name: "name",
  users: [],
};
const UserReducers = (state = iniialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        name: "ravi",
        users: state.users.concat(action.payload),
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: true,
        user: state.user.concat(action.payload),
      };
    default:
      return state;
  }
  return state;
};

export default UserReducers;
