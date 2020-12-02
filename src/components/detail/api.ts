import {
    FETCH_SUGGESTION_FAILURE,
    FETCH_SUGGESTION_SUCCESS,
} from '../../context/flux/types/request';

export const FETCH_SUGGESTIONS = (genre: string) => {
    return {
        url: `https://owls-library.herokuapp.com/books?genre=${genre}`,
        method: 'GET',
        success: FETCH_SUGGESTION_SUCCESS,
        failure: FETCH_SUGGESTION_FAILURE,
    };
};
