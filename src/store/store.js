// imports for redux
import { configureStore } from "@reduxjs/toolkit";

// import slices
import authReducer from "./authentication";
import { authMiddleware } from './authentication';

// store (only one)
const reduxStore = configureStore({
                                      reducer   : {
                                          authReducer
                                      },
                                      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
                                  });

// export actions and store
export default reduxStore;
