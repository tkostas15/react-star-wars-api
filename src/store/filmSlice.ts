import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilmObject, FilmSlice, StoreSlices} from "../types/AllTypes";

// film slice initial state
const initialState: FilmSlice = {
    fetchedInfo: [],
    sending: false,
    error: "",
    atLeastOneFetch: false,
};

// film slice
const filmSlice = createSlice({
    name: "filmInfo",
    initialState: initialState,
    reducers: {
        fetchFilmInfoStart(
            state,
            action: PayloadAction<object>
        ): void {
            state.sending = true;
        },
        fetchFilmInfoSuccess(state, action: PayloadAction<Array<any>>): void {
            state.sending         = false;
            state.atLeastOneFetch = true;
            state.fetchedInfo     = action.payload;
        },
        fetchFilmInfoFail(state, action: PayloadAction<string>): void {
            state.sending         = false;
            state.atLeastOneFetch = true;
            state.error           = action.payload;
        },
    },
});

// exports reducer
export const filmReducer = filmSlice.reducer;

// export actions
export const fetchFilmInfoStart   = filmSlice.actions.fetchFilmInfoStart;
export const fetchFilmInfoSuccess = filmSlice.actions.fetchFilmInfoSuccess;
export const fetchFilmInfoFail    = filmSlice.actions.fetchFilmInfoFail;

// export selectors
export const getFetchedInfo = (state: StoreSlices): Array<FilmObject> => state.film.fetchedInfo;
export const getIsSending   = (state: StoreSlices): boolean => state.film.sending;
export const getError       = (state: StoreSlices): string => state.film.error;
export const getIfFetched   = (state: StoreSlices): boolean => state.film.atLeastOneFetch;
