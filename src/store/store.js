// imports for redux
import { configureStore } from "@reduxjs/toolkit";

// import slices
import authReducer from "./authentication";

// store (only one)
const reduxStore = configureStore({
                                      reducer: {
                                          authReducer
                                      },
                                  });

// export actions and store
export default reduxStore;
