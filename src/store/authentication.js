import { createSlice } from "@reduxjs/toolkit";

// authentication slice
const authInitialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
};
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    },
  },
});

// local storage
export const isAuthenticatedLocalStorage = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

// export
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
