// imports for redux
import { configureStore }   from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// import slices
import { authReducer }  from "./authSlice";
import { filmsReducer } from "./filmsSlice";
import { filmReducer }  from "./filmSlice";

// sagas
import rootSagas from "../sagas/rootSagas";
const sagaMiddleware = createSagaMiddleware();

// store (only one)
const reduxStore = configureStore({
                                      reducer   : {
                                          authReducer,
                                          filmsReducer,
                                          filmReducer,
                                      },
                                      middleware: [sagaMiddleware],
                                  });
sagaMiddleware.run(rootSagas);

// export actions and store
export default reduxStore;
