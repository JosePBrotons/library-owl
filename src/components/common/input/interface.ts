import {
    ColorValue,
    NativeSyntheticEvent,
    StyleSheetProperties,
    TextInputSubmitEditingEventData,
} from 'react-native';

export interface IInputProps {
    placeholder: string;
    value: string;
    placeholderTextColor: ColorValue;
    onChangeText: any;
    secureTextEntry?: boolean;
    iconName?: string;
    customStyle?: {};
    onSubmitEditing?:
        | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
        | undefined;
}
