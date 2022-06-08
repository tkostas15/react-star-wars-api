// imports for redux
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// import slices
import { authReducer } from "./authSlice";
import { filmsReducer } from "./filmsSlice";
import { filmReducer } from "./filmSlice";

// sagas
import rootSagas from "../sagas/rootSagas";
const sagaMiddleware = createSagaMiddleware();
export const rootReducer = {
  auth: authReducer,
  films: filmsReducer,
  film: filmReducer,
};

// store (only one)
const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSagas);

// export actions and store
export default reduxStore;
