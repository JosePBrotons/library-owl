import React from 'react';
import Context from './context';
import Router from './router';
const Root = () => {
    return (
        <Context.Provider>
            <Router />
        </Context.Provider>
    );
};

export default Root;
