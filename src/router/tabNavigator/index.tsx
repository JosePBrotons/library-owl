import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS } from './../../constants/theme';
import { tabs } from './../routes';
import { IScreenOptions, ITab, ITabIconProps } from './../interface';
import { RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: COLORS.blue,
    inactiveTintColor: COLORS.lighterGray,
    keyboardHidesTabBar: true,
    labelStyle: { fontFamily: FONTS.h3.fontFamily },
};

const renderTabIcon = (
    route: RouteProp<Record<string, object | undefined>, string>
) => {
    return (props: ITabIconProps) => {
        const { size = 10, color = 'tomato' } = { ...props };
        const { name = '' } = { ...route };
        const iconName = getTabIconByRouteName(name);
        return <FontAwesome name={iconName} size={size} color={color} />;
    };
};

const getTabIconByRouteName = (routeName: string) => {
    const tabIconByRouteName = {
        Library: 'book',
        Settings: 'gear',
        DEFAULT: 'info-circle',
    };
    const route: string = !!routeName ? routeName : 'DEFAULT';
    return tabIconByRouteName[route as keyof typeof tabIconByRouteName];
};

const getScreenOptions = (screenOptions: IScreenOptions) => {
    const { route } = { ...screenOptions };
    return { tabBarIcon: renderTabIcon(route) };
};

const renderTabs = (tabs: Array<ITab>) =>
    tabs.map((tab: ITab, index: number) => (
        <Tab.Screen key={`tab-${index}`} {...tab} />
    ));

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={getScreenOptions}
            tabBarOptions={tabBarOptions}>
            {renderTabs(tabs)}
        </Tab.Navigator>
    );
};

export default TabNavigator;
