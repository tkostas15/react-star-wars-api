// imports
import { put } from "redux-saga/effects";
import { ResponseGenerator, FilmObject } from "../types/AllTypes";
import { fetchFilmInfoSuccess, fetchFilmInfoFail } from "../store/filmSlice";

// sagas
function* watchToFetchFilmInfoSaga(action?: any) {
  try {
    // get api info
    const fetchApi = action.payload.api;
    const fetchTimeout = action.payload.timeout;
    const fetchMethod = action.payload.method ? action.payload.method : "GET";
    const fetchHeaders = action.payload.headers ? action.payload.headers : {};
    const fetchBody = action.payload.body ? action.payload.body : null;

    // controller and timeout
    const msToWait = fetchTimeout ? fetchTimeout : 4000;
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

    // request success => return data
    const responseData: FilmObject = yield response.json();

    // construct table to return
    const info = [
      {
        id: responseData.episode_id,
        episode: responseData.episode_id,
        title: responseData.title,
        director: responseData.director,
        release_date: responseData.release_date,
        created: responseData.created,
        opening_crawl: responseData.opening_crawl,
        producer: responseData.producer,
        starships: responseData.starships,
        vehicles: responseData.vehicles,
        characters: responseData.characters,
        species: responseData.species,
        planets: responseData.planets,
        edited: responseData.edited,
      },
    ];

    // return success
    yield put(fetchFilmInfoSuccess(info));
  } catch (error) {
    if (error instanceof Error) {
      const errorMessageToReturn =
        error.name === "AbortError" ? "abort" : error.name;
      yield put(fetchFilmInfoFail(errorMessageToReturn));
    } else yield put(fetchFilmInfoFail("error"));
  }
}

// exports
export default watchToFetchFilmInfoSaga;
