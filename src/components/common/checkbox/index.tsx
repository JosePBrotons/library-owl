import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { ICheckbox } from './interface';

const CheckBox = (props: ICheckbox) => {
    const { checked = false, description = '', onPress = () => null } = {
        ...props,
    };
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={styles.container}>
            <FontAwesome
                name={checked ? 'check-square' : 'square-o'}
                style={styles.icon}
            />
            <Text
                style={styles.description}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {description}
            </Text>
        </TouchableOpacity>
    );
};

export default CheckBox;
