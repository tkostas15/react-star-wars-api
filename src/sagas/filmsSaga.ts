// imports
import { put } from "redux-saga/effects";
import { fetchFilmsSuccess, fetchFilmsFail } from "../store/filmsSlice";
import { ResponseGenerator, FilmsResponse } from "../types/AllTypes";

// sagas
function* watchToFetchFilmsSaga(action: any) {
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

    // fetch config object
    const fetchConfigObject: {
      method: string;
      headers: HeadersInit;
      body: BodyInit | null;
      signal: AbortSignal | null;
    } = {
      method: fetchMethod,
      headers: fetchHeaders,
      body: fetchBody,
      signal: abortController.signal,
    };

    // send request
    const response: ResponseGenerator = yield fetch(
      fetchApi,
      fetchConfigObject
    );
    clearTimeout(timeoutId);

    // request error => throw error
    if (!response.ok) throw new Error("Request failed!");

    // else return data
    const responseData: FilmsResponse = yield response.json();
    yield put(fetchFilmsSuccess(responseData.results));
  } catch (error) {
    if (error instanceof Error) {
      const errorMessageToReturn =
        error.name === "AbortError" ? "abort" : error.name.toString();
      yield put(fetchFilmsFail(errorMessageToReturn));
    } else yield put(fetchFilmsFail("error"));
  }
}

// export
export default watchToFetchFilmsSaga;
