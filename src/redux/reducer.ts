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
  description: "Some stuff",
  lines: [
    {
      short_name: "EWL",
      level: 4,
      timestamp: "Woah",
    },
    {
      short_name: "NSL",
      level: 5,
      timestamp: "Woah",
    },
  ],
  isFetching: false,
  tweets: [],
  error: false,
};
const fetchLineStatusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Constants.FETCHING_LINE_STATUS:
      return { ...state, isFetching: action.isFetching, error: action.error };
    case Constants.FETCH_LINE_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        lines: action.data.lines,
        error: action.error,
      };
    case Constants.FETCH_LINE_STATUS_FAILURE:
      return { ...state, isFetching: action.isFetching, error: action.error };
    case Constants.FETCHING_TWITTER_DATA:
      return { ...state, isFetching: action.isFetching, error: action.error };
    case Constants.FETCH_TWITTER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        tweets: action.data,
        error: action.error,
      };
    case Constants.FETCH_TWITTER_DATA_FAILURE:
      return { ...state, isFetching: action.isFetching, error: action.error };
    default:
      return state;
  }
};

const fetchTwitterDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Constants.FETCHING_TWITTER_DATA:
      return { ...state, isFetching: action.isFetching };
    case Constants.FETCH_TWITTER_DATA_SUCCESS:
      return { ...state, isFetching: action.isFetching, tweets: action.data };
    case Constants.FETCH_TWITTER_DATA_FAILURE:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default fetchLineStatusReducer;
