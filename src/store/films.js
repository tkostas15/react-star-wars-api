import { createSlice } from "@reduxjs/toolkit";

// films slice
const initialState = {
    fetchedFilms: [],
    error       : false,
};
const filmsSlice   = createSlice({
                                     name        : 'allFilms',
                                     initialState: initialState,
                                     reducers    : {
                                         addFilm (state, action) {
                                             switch (action.type) {
                                                 case 'FETCH_SUCCESS':
                                                     return {
                                                         fetchedFilms: action.payload,
                                                         error       : false,
                                                     }
                                                 case 'FETCH_ERROR':
                                                     return {
                                                         fetchedFilms: [],
                                                         error       : action.payload,
                                                     }
                                                 default:
                                                     return state;
                                             }
                                         },
                                     }
                                 });

// exports
export const filmsReducer = filmsSlice.reducer;
export const filmsActions = filmsSlice.actions;