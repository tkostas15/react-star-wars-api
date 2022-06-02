import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    fetchedInfo    : [],
    sending        : false,
    error          : false,
    atLeastOneFetch: false,
};
const filmSlice    = createSlice({
                                     name        : 'filmInfo',
                                     initialState: initialState,
                                     reducers    : {
                                         fetchFilmInfoStart (state, action) {
                                             state.sending         = true;
                                             state.atLeastOneFetch = false;
                                         },
                                         fetchFilmInfoSuccess (state, action) {
                                             state.sending         = false;
                                             state.atLeastOneFetch = true;
                                             state.fetchedInfo     = action.payload;
                                         },
                                         fetchFilmInfoFail (state, action) {
                                             state.sending         = false;
                                             state.atLeastOneFetch = true;
                                             state.error           = action.payload;
                                         },
                                     }
                                 });

// exports
export const filmReducer                                                   = filmSlice.reducer;
export const {fetchFilmInfoStart, fetchFilmInfoSuccess, fetchFilmInfoFail} = filmSlice.actions;