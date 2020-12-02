import React, { createContext, useReducer } from 'react';
import reducer from './flux';

export const StateContext = createContext({});
export const DispatchContext = createContext({});

export const initialState = {
    loading: false,
    error: null,
    user: null,
    library: null,
    suggestions: null,
    rentals: [],
    language: 'en',
    multiScroll: true,
};

const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

export default {
    Provider,
    Consumer: StateContext.Consumer,
};
