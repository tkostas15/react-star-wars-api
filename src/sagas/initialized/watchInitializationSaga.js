import { put } from "redux-saga/effects";
import {
  uiInitializationSucceed,
  uiInitializationError,
} from "../../store/uiInitialization";

function* watchInitializationSaga() {
  yield put(uiInitializationSucceed({ uiIsInitialized: true }));
  try {
  } catch (e) {
    yield put(uiInitializationError({ uiIsInitialized: false }));
  }
}

export default watchInitializationSaga;
