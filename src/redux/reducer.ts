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
  lines: [],
  isFetching: false,
  tweets: [],
  error: false,
  subscribedLines: {
    "All lines": {
      topic: "all",
      subscribed: false,
    },
    "NSL": {
      topic: "nsl",
      subscribed: false,
    },
    "EWL": {
      topic: "ewl",
      subscribed: false,
    },
    "CCL": {
      topic: "ccl",
      subscribed: false,
    },
    "DTL": {
      topic: "dtl",
      subscribed: false,
    },
    "NEL": {
      topic: "nel",
      subscribed: false,
    },
  },
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
        description: action.data.description,
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
    case Constants.TOGGLE_SUBSCRIPTION_LINE:
      return {
        ...state,
        subscribedLines: {
          ...state.subscribedLines,
          [action.data.line]: {
            ...state.subscribedLines[action.data.line],
            subscribed: action.data.value,
          },
        },
      };
    default:
      return state;
  }
};

export default fetchLineStatusReducer;
