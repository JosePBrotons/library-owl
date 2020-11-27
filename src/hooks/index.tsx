import { useContext } from 'react';
import { DispatchContext, StateContext } from '../context';

export const useAppContext = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    return [state, dispatch];
};
