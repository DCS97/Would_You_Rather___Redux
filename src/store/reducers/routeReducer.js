import { SET_ROUTE } from "../actions";

export default function routeReducer(state = null, action) {
  switch (action.type) {
    case SET_ROUTE:
      return action.route;
    default:
      return state;
  }
}
