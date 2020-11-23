import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS, FONTS } from './../../constants/theme';
import { tabs } from './../routes';
import { ITab } from './../interface';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: COLORS.black,
    inactiveTintColor: COLORS.gray,
    keyboardHidesTabBar: true,
    labelStyle: { fontFamily: FONTS.h3.fontFamily },
};

const renderTabs = (tabs: Array<ITab>) =>
    tabs.map((tab: ITab, index: number) => (
        <Tab.Screen key={`tab-${index}`} {...tab} />
    ));

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            {renderTabs(tabs)}
        </Tab.Navigator>
    );
};

export default TabNavigator;