import * as Constants from "./action.constants";
import { combineReducers } from "redux";
// Import reducers

/*
const mockData = {
  "description": "EWL is down, sian.",
  "lines": {
    "EWL": {
      ”short_name": "EWL",
      "level": 4,
      "timestamp": <<date in ISO8601>>,
    },
    "NSL": {
      "short_name": "NSL",
      "level": 2,
      "timestamp": <<date in ISO8601>>,
    },
  }
}
*/

const initialState = {
  status: {
    description: "",
    lines: {},
    isFetching: false,
    tweets: {},
  },
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Constants.FETCH_LINE_STATUS:
      return { ...state, isFetching: action.isFetching };
    case Constants.FETCH_LINE_STATUS_SUCCESS:
      return { ...state, isFetching: action.isFetching, lines: action.data };
    case Constants.FETCH_LINE_STATUS_FAILURE:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default reducer;
