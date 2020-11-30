import React from 'react';
import { Text, View } from 'react-native';
import I18n from 'i18n-js';
import { styles } from './styles';
import { IModalProps } from './interface';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Modal = (props: IModalProps) => {
    const { title = '', message = '', onPress = () => null } = { ...props };
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <View style={styles.messageContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
                    <Text style={styles.ok}>{I18n.t('global.ok')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Modal;
