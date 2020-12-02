import { useContext, useEffect } from 'react';
import { DispatchContext, StateContext } from '../context';

export const useAppContext = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    return [state, dispatch];
};

export const useRemoveNavDefault = (navigation: any) => {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (event: any) => {
                event.preventDefault();
            }),
        []
    );
};
