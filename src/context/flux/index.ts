import {
    changeLanguage,
    clearAll,
    getRentals,
    handleScroll,
    restoreToken,
    setNewRental,
} from './actions/behavior';
import {
    fetchData,
    libraryFailure,
    librarySuccess,
    loginFailure,
    loginSuccess,
    suggestionsFailure,
    suggestionsSuccess,
} from './actions/request';
import {
    CHANGE_LANGUAGE,
    CLEAR_ALL,
    GET_RENTALS,
    HANDLE_SCROLL,
    RESTORE_TOKEN,
    SET_RENTAL,
} from './types/behavior';
import {
    FETCHING_DATA,
    FETCH_LIBRARY_FAILURE,
    FETCH_LIBRARY_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_SUCCESS,
    FETCH_SUGGESTION_FAILURE,
    FETCH_SUGGESTION_SUCCESS,
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
    [FETCH_SUGGESTION_SUCCESS]: (state: any, payload: any) =>
        suggestionsSuccess(state, payload),
    [FETCH_SUGGESTION_FAILURE]: (state: any, payload: any) =>
        suggestionsFailure(state, payload),
    [RESTORE_TOKEN]: (state: any, payload: any) => restoreToken(state, payload),
    [CHANGE_LANGUAGE]: (state: any, payload: any) =>
        changeLanguage(state, payload),
    [GET_RENTALS]: (state: any, payload: any) => getRentals(state, payload),
    [SET_RENTAL]: (state: any, payload: any) => setNewRental(state, payload),
    [HANDLE_SCROLL]: (state: any, payload: boolean) =>
        handleScroll(state, payload),
    [CLEAR_ALL]: (state: any, payload: any) => clearAll(state, payload),
    DEFAULT: (state: any) => state,
};
export default function reducer(state: any, action: any) {
    const { type = 'DEFAULT', payload = null } = { ...action };
    return type ? reducers[type](state, payload) : reducers.DEFAULT(state);
}
