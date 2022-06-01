import { takeEvery } from "redux-saga/effects";
import watchInitializationSaga from "./initialized/watchInitializationSaga";
import { uiInitializationStart } from "../store/uiInitialization";

function* rootSagas() {
  yield takeEvery(uiInitializationStart().type, watchInitializationSaga);
}

export default rootSagas;
