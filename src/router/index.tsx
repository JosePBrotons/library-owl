import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { IStack } from './interface';
import { stack } from './routes';

const Stack = createStackNavigator();

const renderStack = (stacks: Array<IStack>, Stack: any) =>
    stacks.map((stack: IStack, index: number) => (
        <Stack.Screen key={`stack-${index}`} {...stack} />
    ));
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>{renderStack(stack, Stack)}</Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;
