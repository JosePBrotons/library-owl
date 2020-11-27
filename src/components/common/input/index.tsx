import React from 'react';
import { ColorValue, Text, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { isBlank } from '../../../utils';
import { IInputProps } from './interface';
import { styles } from './styles';

const renderIcon = (iconName: string, color: ColorValue) => {
    return (
        !isBlank(iconName) && (
            <FontAwesome
                name={iconName}
                size={styles.icon.fontSize}
                color={color}
            />
        )
    );
};

const changeTextEvent = (onChangeText: (text: string) => void) => (
    text: string
) => onChangeText(text);

const Input = (props: IInputProps) => {
    const {
        placeholder = '',
        value = '',
        onChangeText,
        placeholderTextColor,
        secureTextEntry = false,
        iconName = '',
    } = {
        ...props,
    };
    return (
        <View style={styles.inputView}>
            {renderIcon(iconName, placeholderTextColor)}
            <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.inputText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={changeTextEvent(onChangeText)}
            />
        </View>
    );
};

export default Input;
