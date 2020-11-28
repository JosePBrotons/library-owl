import {
    FETCH_LIBRARY_FAILURE,
    FETCH_LIBRARY_SUCCESS,
} from '../../context/flux/types/request';

export const FETCH_LIBRARY = () => {
    return {
        url:
            'https://my-json-server.typicode.com/josepbrotons/owls-library-rest/books',
        method: 'GET',
        success: FETCH_LIBRARY_SUCCESS,
        failure: FETCH_LIBRARY_FAILURE,
    };
};
