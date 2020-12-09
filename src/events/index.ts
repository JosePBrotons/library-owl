const events = {
    login: {
        loginSuccessful: 'LOGIN_SUCCESSFUL',
        logOut: 'LOGOUT',
    },
    bookDetail: {
        bookDetail: 'BOOK_DETAIL',
        rentedBook: 'BOOK_RENTED',
    },
    comments: {
        commentsDetail: 'COMMENTS_DETAIL',
    },
    settings: {
        changeLanguage: 'LANGUAGE_CHANGE',
    },
    error: {
        appCrash: 'APP_CRASHED'
    }
};

export default events;
