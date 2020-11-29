const restoreTokenSuccess = (state: any, payload: any) => {
    return { ...state, user: payload };
};

export { restoreTokenSuccess };
