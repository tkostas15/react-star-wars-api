// imports for redux
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

// import slices
import { authReducer } from "./authentication";
import { filmsReducer } from "./films";

// sagas
import { apiFetchStart, apiFetchSucceeded, apiFetchFailed } from "../sagas/filmsSagas";
const sagaMiddleware = createSagaMiddleware();

// store (only one)
const reduxStore = configureStore({
                                      reducer   : {
                                          authReducer,
                                          filmsReducer,
                                      },
                                      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
                                  });

// export actions and store
export default reduxStore;

// dispatch saga action
export const dispatchSaga = type => reduxStore.dispatch({type});
