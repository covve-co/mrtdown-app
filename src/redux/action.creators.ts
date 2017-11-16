import * as Constants from "./action.constants";
import _axios from "axios";
import apiConstants from "../config/index";
import firebase from "react-native-firebase";

const firebaseapp = firebase.app();
const firebaseMessaging = firebaseapp.messaging();

const axios = _axios.create({
  baseURL: apiConstants.api.baseUrl,
  timeout: 5000,
});

function fetchLineStatusSuccess(data: any) {
  return {
    type: Constants.FETCH_LINE_STATUS_SUCCESS,
    isFetching: false,
    error: false,
    data,
  };
}

function fetchLineStatusFailure() {
  return {
    type: Constants.FETCH_LINE_STATUS_FAILURE,
    isFetching: false,
    error: true,
  };
}

function fetchingLineStatus() {
  return {
    type: Constants.FETCHING_LINE_STATUS,
    isFetching: true,
    error: false,
  };
}
function toggleSubscription(data: any) {
  if (data.value === true) {
    firebaseMessaging.subscribeToTopic(data.topic);
  } else {
    firebaseMessaging.unsubscribeFromTopic(data.topic);
  }
  return {
    type: Constants.TOGGLE_SUBSCRIPTION_LINE,
    data,
  };
}

function fetchLineStatus() {
  return (dispatch: any) => {
    dispatch(fetchingLineStatus());
    axios.get("/status").then(
      (response) => dispatch(fetchLineStatusSuccess(response.data)),
      (error) => dispatch(fetchLineStatusFailure()),
    );
  };
}

function fetchTwitterDataSuccess(data: any) {
  return {
    type: Constants.FETCH_TWITTER_DATA_SUCCESS,
    isFetching: false,
    error: false,
    data,
  };
}

function fetchTwitterDataFailure() {
  return {
    type: Constants.FETCH_TWITTER_DATA_FAILURE,
    isFetching: false,
    error: true,
  };
}

function fetchingTwitterData() {
  return {
    type: Constants.FETCHING_TWITTER_DATA,
    error: false,
    isFetching: true,
  };
}

function fetchTwitterData() {
  return (dispatch: any) => {
    dispatch(fetchingTwitterData());
    axios.get("/tweetlist").then(
      (response) => dispatch(fetchTwitterDataSuccess(response.data)),
      (error) => dispatch(fetchTwitterDataFailure()),
    );
  };
}

function saveQuestions(data: object) {
  return {
    type: Constants.FETCH_QUESTIONS,
    data,
  };
}

export {
  fetchLineStatus,
  fetchTwitterData,
  saveQuestions,
  toggleSubscription,
};
