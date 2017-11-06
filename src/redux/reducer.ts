import * as constants from "./action.constants";
import { combineReducers } from "redux";
// Import reducers

const initialState = {
  state: false,
  description: "Woah some Text",
  checked: false,
};

const reducer = (state = initialState, action: any) => {
  return state;
};

export default reducer;
