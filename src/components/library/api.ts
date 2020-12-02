import {
    FETCH_LIBRARY_FAILURE,
    FETCH_LIBRARY_SUCCESS,
} from '../../context/flux/types/request';

export const FETCH_LIBRARY = () => {
    return {
        url: 'https://owls-library.herokuapp.com/books',
        method: 'GET',
        success: FETCH_LIBRARY_SUCCESS,
        failure: FETCH_LIBRARY_FAILURE,
    };
};

export const SEARCH_BOOK = (bookTitle: string) => {
    return {
        url: `https://owls-library.herokuapp.com/books?title=${bookTitle}`,
        method: 'GET',
    };
};
