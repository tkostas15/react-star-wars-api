import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  fetchedInfo: [],
  sending: false,
  error: false,
  atLeastOneFetch: false,
};
const filmSlice = createSlice({
  name: "filmInfo",
  initialState: initialState,
  reducers: {
    fetchFilmInfoStart(state, action) {
      state.sending = true;
    },
    fetchFilmInfoSuccess(state, action) {
      state.sending = false;
      state.atLeastOneFetch = true;
      state.fetchedInfo = action.payload;
    },
    fetchFilmInfoFail(state, action) {
      state.sending = false;
      state.atLeastOneFetch = true;
      state.error = action.payload;
    },
  },
});

// exports
export const filmReducer = filmSlice.reducer;
export const { fetchFilmInfoStart, fetchFilmInfoSuccess, fetchFilmInfoFail } =
  filmSlice.actions;

// export selectors
export const getFetchedInfo = ({ film }) => film.fetchedInfo;
export const getIsSending = ({ film }) => film.sending;
export const getError = ({ film }) => film.error;
export const getIfFetched = ({ film }) => film.atLeastOneFetch;
