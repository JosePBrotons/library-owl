import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { userDataKey } from '../constants';
import { RESTORE_TOKEN } from '../context/flux/types/behavior';
import { tokenizerManager } from '../core/tokenizer';
import { useAppContext } from '../hooks';
import { IStack } from './interface';
import { stack } from './routes';

const Stack = createStackNavigator();

const renderStack = (stacks: Array<IStack>, Stack: any) =>
    stacks.map((stack: IStack, index: number) => (
        <Stack.Screen key={`stack-${index}`} {...stack} />
    ));

const restoreUserInfo = async (dispatch: any, getItem: any) => {
    const token = await getItem();
    if (!!token) {
        const { payload = {} } = await tokenizerManager.decode(token);
        const { iss = '' } = { ...payload }
        await dispatch({ type: RESTORE_TOKEN, payload: JSON.parse(iss) });
    }
};
const Router = () => {
    const [, dispatch] = useAppContext();
    const { getItem } = useAsyncStorage(userDataKey);
    useEffect(() => {
        restoreUserInfo(dispatch, getItem);
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator>{renderStack(stack, Stack)}</Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;
