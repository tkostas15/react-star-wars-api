import { createSlice } from "@reduxjs/toolkit";

// authentication slice
const authInitialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  loginError: false,
  startingLogin: false,
  logoutError: false,
  startingLogout: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    loginStart(state, action) {
      state.startingLogin = true;
    },
    loginSuccess(state, action) {
      state.startingLogin = false;
      state.isAuthenticated = true;
    },
    loginFail(state, action) {
      state.startingLogin = false;
      state.loginError = action.payload;
    },
    logoutStart(state, action) {
      state.startingLogout = true;
    },
    logoutSuccess(state, action) {
      state.startingLogout = false;
      state.isAuthenticated = false;
    },
    logoutFail(state, action) {
      state.startingLogout = false;
      state.logoutError = action.payload;
    },
  },
});

// export selector
export const getIsAuthenticatedUsingLocalStorage = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

// export reducer
export const authReducer = authSlice.reducer;

// export actions
export const {
  loginStart,
  loginSuccess,
  loginFail,
  logoutStart,
  logoutSuccess,
  logoutFail,
} = authSlice.actions;
