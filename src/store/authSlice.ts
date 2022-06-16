import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "../types/AllTypes";

// authentication initial state
const authInitialState: AuthSlice = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  loginError: "",
  startingLogin: false,
  logoutError: "",
  startingLogout: false,
};

// authentication slice
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    loginStart(state): void {
      state.startingLogin = true;
    },
    loginSuccess(state): void {
      state.startingLogin = false;
      state.isAuthenticated = true;
    },
    loginFail(state, action: PayloadAction<string>): void {
      state.startingLogin = false;
      state.loginError = action.payload;
    },
    logoutStart(state): void {
      state.startingLogout = true;
    },
    logoutSuccess(state): void {
      state.startingLogout = false;
      state.isAuthenticated = false;
    },
    logoutFail(state, action: PayloadAction<string>): void {
      state.startingLogout = false;
      state.logoutError = action.payload;
    },
  },
});

// export reducer
export const authReducer = authSlice.reducer;

// export actions
export const loginStart = authSlice.actions.loginStart;
export const loginSuccess = authSlice.actions.loginSuccess;
export const loginFail = authSlice.actions.loginFail;
export const logoutStart = authSlice.actions.logoutStart;
export const logoutSuccess = authSlice.actions.logoutSuccess;
export const logoutFail = authSlice.actions.logoutFail;

// export selector
export const getIsAuthenticatedUsingLocalStorage = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};
