import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreSlices, FilmsSlice, FilmObject } from "../types/AllTypes";

// films slice initial state
const initialState: FilmsSlice = {
  fetchedFilms: [],
  sending: false,
  error: "",
  atLeastOneFetch: false,
};

// film slice
const filmsSlice = createSlice({
  name: "allFilms",
  initialState: initialState,
  reducers: {
    fetchFilmsStart(state, action?: PayloadAction<object> | undefined): void {
      state.sending = true;
    },
    fetchFilmsSuccess(state, action: PayloadAction<Array<any>>): void {
      state.sending = false;
      state.atLeastOneFetch = true;
      state.fetchedFilms = action.payload;
    },
    fetchFilmsFail(state, action: PayloadAction<string>): void {
      state.sending = false;
      state.atLeastOneFetch = true;
      state.error = action.payload;
    },
  },
});

// export reducer
export const filmsReducer = filmsSlice.reducer;

// export actions
export const fetchFilmsStart = filmsSlice.actions.fetchFilmsStart;
export const fetchFilmsFail = filmsSlice.actions.fetchFilmsFail;
export const fetchFilmsSuccess = filmsSlice.actions.fetchFilmsSuccess;

// export state selectors
export const getFilms = (state: StoreSlices): Array<FilmObject> =>
  state.films.fetchedFilms;
export const getIsSending = (state: StoreSlices): boolean =>
  state.films.sending;
export const getError = (state: StoreSlices): string => state.films.error;
export const getFetched = (state: StoreSlices): boolean =>
  state.films.atLeastOneFetch;
