// imports
import { takeEvery }                       from "redux-saga/effects";
import { fetchFilmsStart }                 from "../store/filmsSlice";
import { fetchFilmInfoStart }              from "../store/filmSlice";
import { loginStart, logoutStart }         from '../store/authSlice';
import watchToFetchFilmsSaga               from './filmsSaga';
import watchToFetchFilmInfoSaga            from './filmSaga';
import { watchLoginSaga, watchLogOutSaga } from "./authSaga";

// sagas
function* rootSagas () {
    yield takeEvery(fetchFilmsStart().type, watchToFetchFilmsSaga);
    yield takeEvery(fetchFilmInfoStart().type, watchToFetchFilmInfoSaga);
    yield takeEvery(loginStart().type, watchLoginSaga);
    yield takeEvery(logoutStart().type, watchLogOutSaga);
}

// export
export default rootSagas;
