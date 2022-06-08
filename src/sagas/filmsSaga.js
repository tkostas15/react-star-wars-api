// imports
import { put } from "redux-saga/effects";
import { fetchFilmsSuccess, fetchFilmsFail } from "../store/filmsSlice";
// sagas
function* watchToFetchFilmsSaga(action) {
  try {
    // get api and timeout
    const fetchApi = action.payload.api;
    const fetchTimeout = action.payload.timeout;
    const fetchMethod = action.payload.method ? action.payload.method : "GET";
    const fetchHeaders = action.payload.headers ? action.payload.headers : {};
    const fetchBody = action.payload.body ? action.payload.body : null;
    // controller and timeout
    const msToWait = fetchTimeout ? fetchTimeout : 10000;
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => {
      abortController.abort();
    }, msToWait);

    // send request
    const response = yield fetch(fetchApi, {
      method: fetchMethod,
      headers: fetchHeaders,
      body: fetchBody,
      signal: abortController.signal,
    });

    clearTimeout(timeoutId);
    // request error => throw error
    if (!response.ok) throw new Error("Request failed!");

    const responseData = yield response.json();

    yield put(fetchFilmsSuccess(responseData.results));
  } catch (error) {
    const errorMessageToReturn = error.name === "AbortError" ? "abort" : error;
    yield put(fetchFilmsFail(errorMessageToReturn));
  }
}

// export
export default watchToFetchFilmsSaga;
