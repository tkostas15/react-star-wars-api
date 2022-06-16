// imports
import { put } from "redux-saga/effects";
import {
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
} from "../store/authSlice";

// sagas
export function* watchLoginSaga() {
  try {
    localStorage.setItem("isAuthenticated", "true");
    yield put(loginSuccess());
  } catch (error) {
    if (typeof error === "string") yield put(loginFail(error));
    else yield put(loginFail("login error"));
  }
}

export function* watchLogOutSaga() {
  try {
    localStorage.setItem("isAuthenticated", "false");
    yield put(logoutSuccess());
  } catch (error) {
    if (typeof error === "string") yield put(logoutFail(error));
    else yield put(logoutFail("logout error"));
  }
}
