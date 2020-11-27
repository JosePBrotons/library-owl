import { ColorValue } from 'react-native';

export interface IInputProps {
    placeholder: string;
    value: string;
    placeholderTextColor: ColorValue;
    onChangeText: any;
    secureTextEntry?: boolean;
    iconName?: string;
}
