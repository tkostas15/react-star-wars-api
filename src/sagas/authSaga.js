// imports
import { put }                                                from 'redux-saga/effects';
import { loginSuccess, loginFail, logoutSuccess, logoutFail } from '../store/authSlice';

// sagas
export function* watchLoginSaga () {
    try {
        localStorage.setItem('isAuthenticated', 'true');
        yield put(loginSuccess());
    } catch (error) {
        yield put(loginFail(error));
    }
}

export function* watchLogOutSaga () {
    try {
        localStorage.setItem('isAuthenticated', 'false');
        yield put(logoutSuccess());
    } catch (error) {
        yield put(logoutFail(error));
    }
}