import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { isSafeDataType } from '../../../utils';
import { INavbarProps } from './interface';
import { styles } from './styles';

const navbarBackground = require('./../../../assets/img/navbar.png');

const Navbar = (props: INavbarProps) => {
    const { children, leftButton = null, rightButton = null } = { ...props };
    const { icon: leftIcon = '', action: leftAction = () => null } = {
        ...leftButton,
    };
    const { icon: rightIcon = '', action: rightAction = () => null } = {
        ...rightButton,
    };
    return (
        <View style={styles.container}>
            <Image source={navbarBackground} style={styles.navbarImg} />
            <View style={styles.optionsContainer}>
                {!isSafeDataType(leftButton) ? (
                    <View style={styles.empty} />
                ) : (
                    <TouchableOpacity onPress={leftAction} activeOpacity={0.9}>
                        <FontAwesome
                            name={leftIcon}
                            size={20}
                            color={styles.icon.color}
                        />
                    </TouchableOpacity>
                )}
                {children}
                {!isSafeDataType(rightButton) ? (
                    <View style={styles.empty} />
                ) : (
                    <TouchableOpacity onPress={rightAction} activeOpacity={0.9}>
                        <FontAwesome
                            name={rightIcon}
                            size={20}
                            color={styles.icon.color}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Navbar;
