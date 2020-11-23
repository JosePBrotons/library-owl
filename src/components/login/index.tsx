import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

const Login = ({ navigation }) => {
    const { navigate = null } = { ...useNavigation() }
    return (
        <View>
            <TouchableHighlight onPress={() => navigate('Home')}>
                <Text>{'Login'}</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Login;
