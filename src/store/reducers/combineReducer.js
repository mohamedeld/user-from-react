import { combineReducers } from "redux";
import languagesReducer from "./language";

export default combineReducers({
  lang: languagesReducer,
});
