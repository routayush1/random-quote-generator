import { combineReducers } from "redux";
import { changeReducer } from "./changeReducer";
import { quoteReducer } from "./quoteReducer";

export const allReducer = combineReducers({
  quotes: quoteReducer,
  myObject: changeReducer,
});
