import I18n from 'i18n-js';
import React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { useAppContext } from '../../hooks';
import Button from '../common/button';
import { styles } from './styles';

const DEFAULT_IMG_URL: string =
    'https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG93bHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60';

const renderUserInfo = user => {
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

const renderActionButtons = () => {
    return (
        <>
            <Button
                text={I18n.t('settings.changeLanguage')}
                onPress={() => null}
                disabled={false}
            />
            <Button
                text={I18n.t('settings.logOut')}
                onPress={() => null}
                disabled={false}
            />
        </>
    );
};

const Settings = () => {
    const [state] = useAppContext();
    const { user = {} } = { ...state };
    return (
        <SafeAreaView style={styles.container}>
            {renderUserInfo(user)}
            {renderActionButtons()}
        </SafeAreaView>
    );
};

export default Settings;
