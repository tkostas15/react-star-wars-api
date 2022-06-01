import { createSlice } from "@reduxjs/toolkit";

const uiInitializationSlice = createSlice({
  name: "uiInitialization",
  initialState: { uiIsInitialized: false },
  reducers: {
    uiInitializationStart(state, action) {
      state.uiIsInitialized = true;
    },
    uiInitializationSucceed(state, action) {
      state.uiIsInitialized = action.payload.uiIsInitialized;
    },
    uiInitializationError(state, action) {
      state.uiIsInitialized = action.payload.uiIsInitialized;
    },
  },
});

// export
export const uiInitializationSliceReducer = uiInitializationSlice.reducer;
export const {
  uiInitializationStart,
  uiInitializationSucceed,
  uiInitializationError,
} = uiInitializationSlice.actions;
