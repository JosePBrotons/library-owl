const restoreToken = (state: any, payload: any) => {
    return { ...state, user: payload };
};

const changeLanguage = (state: any, payload: any) => {
    return { ...state, language: payload };
}

export { changeLanguage, restoreToken };
