import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Library = () => {
    const { navigate } = { ...useNavigation() };
    return (
        <View>
            <Text>{'Hola library'}</Text>
            <TouchableOpacity onPress={() => navigate('Detail')}>
                <Text>{'Ir a detalle'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Library;
