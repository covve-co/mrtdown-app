import * as Constants from "./action.constants";
import _axios from "axios";
import apiConstants from "../config/index";

const axios = _axios.create({
  baseURL: apiConstants.api.baseUrl,
});

function fetchLineStatusSuccess(data: any) {
  return {
    type: Constants.FETCH_LINE_STATUS_SUCCESS,
    isFetching: false,
    data,
  };
}

function fetchLineStatusFailure(error: any) {
  return {
    type: Constants.FETCH_LINE_STATUS_FAILURE,
    isFetching: false,
    error,
  };
}

function fetchingLineStatus() {
  return {
    type: Constants.FETCHING_LINE_STATUS,
    isFetching: true,
  };
}

function fetchLineStatus() {
  return (dispatch: any) => {
    dispatch(fetchingLineStatus());
    axios.get("/status").then(
      (response) => dispatch(fetchLineStatusSuccess(response.data)),
      (error) => dispatch(fetchLineStatusFailure(error)),
    );
  };
}

function fetchTwitterDataSuccess(data: any) {
  return {
    type: Constants.FETCH_TWITTER_DATA_SUCCESS,
    isFetching: false,
    data,
  };
}

function fetchTwitterDataFailure(error: any) {
  return {
    type: Constants.FETCH_TWITTER_DATA_FAILURE,
    isFetching: false,
    error,
  };
}

function fetchingTwitterData() {
  return {
    type: Constants.FETCHING_TWITTER_DATA,
    isFetching: true,
  };
}

function fetchTwitterData() {
  return (dispatch: any) => {
    dispatch(fetchingTwitterData());
    axios.get("/tweetlist").then(
      (response) => dispatch(fetchTwitterDataSuccess(response.data)),
      (error) => dispatch(fetchTwitterDataFailure(error)),
    );
  };
}

export {
  fetchLineStatus,
  fetchTwitterData,
};
