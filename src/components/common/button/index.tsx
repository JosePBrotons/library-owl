import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IButtonProps } from './interface';
import { styles } from './styles';

const Button = (props: IButtonProps) => {
    const { text = '', disabled = false, onPress = () => null } = { ...props };
    return (
        <TouchableOpacity
            style={[styles.btn, disabled ? styles.disabled : null]}
            disabled={disabled}
            onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
