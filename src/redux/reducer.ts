import * as constants from "./action.constants";
import { combineReducers } from "redux";
// Import reducers

const initialState = {
  state: false,
};
const reducer = (state = initialState, action: any) => {
  return state;
};

export default combineReducers({ reducer });
