import 'react-native-gesture-handler';
import React from 'react';
import Context from './context';
import Router from './router';
const App = () => {
    return (
        <Context.Provider>
            <Router />
        </Context.Provider>
    );
};

export default App;
