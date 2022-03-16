import { SET_LOGIN } from "../actions";

export default function loginReducer(state = true, action) {
  switch (action.type) {
    case SET_LOGIN:
      return false;
    default:
      return state;
  }
}
