import { combineReducers } from "redux";
import logReducer from "./logReducer";

export default combineReducers({
  // first is the name of the state, the second is the set of reducers, reducers dispatch actions
  log: logReducer,
});
