import * as Constants from "./action.constants";
import _axios from "axios";
import apiConstants from "../config/index";
import firebase from "react-native-firebase";
import { AsyncStorage } from "react-native";

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
  return (dispatch: any) => {
    dispatch(changeSubscriptionState(data));
    if (data.value === true) {
      firebaseMessaging.subscribeToTopic(data.topic);
    } else {
      firebaseMessaging.unsubscribeFromTopic(data.topic);
    }
    dispatch(saveSubscriptionState(data));
  };
}

function restoreSubscriptionState() {
  return (dispatch: any) => {
    dispatch(restoringSubscription());
    const lines = AsyncStorage.getItem("lines")
      .then((data) => {
        if (data != null) {
          dispatch(restoredSubscription(data));
        }
      })
      .catch((subErr) => {
        dispatch(failedToRestoreSubscription());
      });
  };
}

function failedToRestoreSubscription() {
  return {
    type: Constants.FAILED_TO_RESTORE_SUBSCRIPTIONS,
  };
}
function restoringSubscription() {
  return {
    type: Constants.RESTORING_SUBSCRIPTIONS,
  };
}

function restoredSubscription(data: any) {
  return {
    type: Constants.RESTORED_SUBSCRIPTIONS,
    data,
  };
}

function changeSubscriptionState(data: any) {
  return {
    type: Constants.CHANGE_SUBSCRIPTION_LINE,
    data,
  };
}
function saveSubscriptionState(data: any) {
  return (dispatch: any) => {
    dispatch(savingSubscriptionState());
    AsyncStorage.setItem("lines", JSON.stringify(data.subscriptions))
      .then(() => {
        dispatch(savedSubscriptionState());
      },
    )
      .catch((err) => {
        dispatch(failedtosaveSubscriptionState());
      });
  };
}

function savingSubscriptionState() {
  return {
    type: Constants.SAVING_SUBSCRIPTION_LINE,
  };
}

function savedSubscriptionState() {
  return {
    type: Constants.SAVED_SUBSCRIPTION_LINE,
  };
}

function failedtosaveSubscriptionState() {
  return {
    type: Constants.FAILED_TO_SAVE_SUBSCRIPTION_LINE,
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
  restoreSubscriptionState,
};
