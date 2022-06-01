import { createSlice } from '@reduxjs/toolkit';

// authentication slice
const authInitialState = {isAuthenticated: false};
const authSlice        = createSlice({
                                         name        : "authentication",
                                         initialState: authInitialState,
                                         reducers    : {
                                             login (state) { state.isAuthenticated = true; },
                                             logout (state) { state.isAuthenticated = false; },
                                         },
                                     });

// middleware to save state into local storage
export const authMiddleware = (store) => (next) => (action) => {
    authActions.login.match(action) ? localStorage.setItem('isAuthenticated', 'true') : localStorage.setItem('isAuthenticated', 'false');
    return next(action);
};

// local storage
export const isAuthenticatedLocalStorage = () => { return localStorage.getItem('isAuthenticated'); };

// export
export default authSlice.reducer;
export const authActions = authSlice.actions;