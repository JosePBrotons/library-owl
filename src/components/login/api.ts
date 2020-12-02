import {
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_SUCCESS,
} from '../../context/flux/types/request';

export const FETCH_LOGIN = (payload: any) => {
    return {
        url: 'https://owls-library.herokuapp.com/sign_in',
        method: 'POST',
        body: JSON.stringify(payload),
        success: FETCH_LOGIN_SUCCESS,
        failure: FETCH_LOGIN_FAILURE,
    };
};
