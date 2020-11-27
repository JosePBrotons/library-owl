import {
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_SUCCESS,
} from '../../context/flux/types/request';

export const FETCH_LOGIN = (payload: any) => {
    return {
        url:
            'https://my-json-server.typicode.com/josepbrotons/owls-library-rest/sign_in',
        method: 'POST',
        body: JSON.stringify(payload),
        success: FETCH_LOGIN_SUCCESS,
        failure: FETCH_LOGIN_FAILURE,
    };
};
