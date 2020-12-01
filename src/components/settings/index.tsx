import { StackActions, useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { CHANGE_LANGUAGE, CLEAR_ALL } from '../../context/flux/types/behavior';
import { analyticsManager } from '../../core/analytics';
import events from '../../events';
import { useAppContext } from '../../hooks';
import { setI18nConfig } from '../../i18n';
import { clearData } from '../../utils';
import Button from '../common/button';
import Navbar from '../common/navbar';
import { IUser } from './interface';
import { styles } from './styles';

const DEFAULT_IMG_URL: string =
    'https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG93bHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60';

const langContext = {
    en: () => setI18nConfig('en'),
    es: () => setI18nConfig('es'),
    DEFAULT: () => setI18nConfig(),
};

const renderUserInfo = (user: IUser | {}) => {
    const { firstName = '', lastName = '', email = '', age = '' } = { ...user };
    return (
        <>
            <Image
                source={{
                    uri: DEFAULT_IMG_URL,
                }}
                style={styles.profileImg}
            />
            <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
            <Text style={styles.email}>{`${email}`}</Text>
            <Text style={styles.age}>{`${I18n.t('login.age')}: ${age} ${I18n.t(
                'login.years'
            )}`}</Text>
        </>
    );
};

const onLogout = (navDispatch: any, dispatch) => {
    return async () => {
        await clearData();
        await dispatch({ type: CLEAR_ALL });
        await analyticsManager.trackEvent({
            eventName: events.login.logOut,
            properties: {},
        });
        navDispatch(StackActions.popToTop());
    };
};

const changeLanguage = (dispatch: any) => {
    return async () => {
        langContext[I18n.currentLocale() === 'en' ? 'es' : 'en']();
        await dispatch({
            type: CHANGE_LANGUAGE,
            payload: I18n.currentLocale(),
        });
        const eventData = {
            eventName: events.settings.changeLanguage,
            properties: { changedLang: I18n.currentLocale() },
        };
        await analyticsManager.trackEvent(eventData);
    };
};

const renderActionButtons = (navDispatch: any, dispatch: any) => {
    return (
        <>
            <Button
                text={I18n.t('settings.changeLanguage')}
                onPress={changeLanguage(dispatch)}
                disabled={false}
            />
            <Button
                text={I18n.t('settings.logOut')}
                onPress={onLogout(navDispatch, dispatch)}
                disabled={false}
            />
        </>
    );
};

const Settings = () => {
    const [state, dispatch] = useAppContext();
    const { dispatch: navDispatch } = useNavigation();
    const { user = {} } = { ...state };
    return (
        <>
            <Navbar>
                <Text style={styles.navBarTitle}>
                    {I18n.t('global.settings').toUpperCase()}
                </Text>
            </Navbar>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    {renderUserInfo(user)}
                    {renderActionButtons(navDispatch, dispatch)}
                </View>
            </ScrollView>
        </>
    );
};

export default Settings;
