import { createSlice } from "@reduxjs/toolkit";

// films slice
const initialState = {
  fetchedFilms: [],
  sending: false,
  error: false,
  atLeastOneFetch: false,
};
const filmsSlice = createSlice({
  name: "allFilms",
  initialState: initialState,
  reducers: {
    fetchFilmsStart(state, action) {
      state.sending = true;
    },
    fetchFilmsSuccess(state, action) {
      state.sending = false;
      state.atLeastOneFetch = true;
      state.fetchedFilms = action.payload;
    },
    fetchFilmsFail(state, action) {
      state.sending = false;
      state.atLeastOneFetch = true;
      state.error = action.payload;
    },
  },
});

// export state selectors
export const getFilms = ({ films }) => films.fetchedFilms;
export const getIsSending = ({ films }) => films.sending;
export const getError = ({ films }) => films.error;
export const getFetched = ({ films }) => films.atLeastOneFetch;

// export reducer
export const filmsReducer = filmsSlice.reducer;

// export actions
export const { fetchFilmsStart, fetchFilmsFail, fetchFilmsSuccess } =
  filmsSlice.actions;
