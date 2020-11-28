import {
    fetchData,
    libraryFailure,
    librarySuccess,
    loginFailure,
    loginSuccess,
} from './actions/request';
import {
    FETCHING_DATA,
    FETCH_LIBRARY_FAILURE,
    FETCH_LIBRARY_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_SUCCESS,
} from './types/request';

const reducers: any = {
    [FETCHING_DATA]: (state: any, payload: any) => fetchData(state, payload),
    [FETCH_LOGIN_SUCCESS]: (state: any, payload: any) =>
        loginSuccess(state, payload),
    [FETCH_LOGIN_FAILURE]: (state: any, payload: any) =>
        loginFailure(state, payload),
    [FETCH_LIBRARY_SUCCESS]: (state: any, payload: any) =>
        librarySuccess(state, payload),
    [FETCH_LIBRARY_FAILURE]: (state: any, payload: any) =>
        libraryFailure(state, payload),
    DEFAULT: (state: any) => state,
};
export default function reducer(state: any, action: any) {
    const { type = 'DEFAULT', payload = null } = { ...action };
    return type ? reducers[type](state, payload) : reducers.DEFAULT(state);
}
