import { initialState } from './../../../index';
const restoreToken = (state: any, payload: any) => {
    return { ...state, user: payload };
};

const changeLanguage = (state: any, payload: any) => {
    return { ...state, language: payload };
};

const getRentals = (state: any, payload: any) => {
    return { ...state, rentals: payload };
};

const setNewRental = (state: any, payload: any) => {
    return { ...state, rentals: payload };
};

const clearAll = (state: any, paload: any) => {
    return { ...initialState };
};

export { changeLanguage, clearAll, getRentals, setNewRental, restoreToken };
