import { combineReducers } from "redux";
import authedUser from "./authedUser";
import userReducer from "./userReducer";
import questionReducer from "./questionReducer";
import loginReducer from "./loginReducer";
import routeReducer from "./routeReducer";

const rootReducer = combineReducers({
  user: authedUser,
  users: userReducer,
  questions: questionReducer,
  login: loginReducer,
  route: routeReducer,
});
export default rootReducer;
