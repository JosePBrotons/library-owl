import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IButtonProps } from './interface';
import { styles } from './styles';

const Button = (props: IButtonProps) => {
    const {
        text = '',
        disabled = false,
        onPress = () => null,
        flat = false,
    } = { ...props };
    return (
        <TouchableOpacity
            style={[
                flat ? styles.flat : styles.btn,
                disabled ? styles.disabled : null,
            ]}
            disabled={disabled}
            onPress={onPress}>
            <Text
                style={flat ? styles.flatText : styles.btnText}
                numberOfLines={1}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
