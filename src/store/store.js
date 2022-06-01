// imports for redux
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// import slices
import { authReducer } from "./authentication";
import { uiInitializationSliceReducer } from "./uiInitialization";
import { filmsReducer } from "./films";

// sagas
import rootSagas from "../sagas/rootSagas";
const sagaMiddleware = createSagaMiddleware();

// store (only one)
const reduxStore = configureStore({
  reducer: {
    authReducer,
    filmsReducer,
    uiInitializationSliceReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

// export actions and store
export default reduxStore;
