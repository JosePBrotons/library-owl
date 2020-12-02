import React from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../constants';
import { IActivityBarProps } from './interface';
import { styles } from './styles';

const ActivityBar = (props: IActivityBarProps) => {
    const { text = '', icon = '' } = { ...props };
    return (
        <View style={styles.container}>
            <Feather name={icon} color={COLORS.white} size={20} />
            <Text style={styles.text}>{`${text}`}</Text>
        </View>
    );
};

export default ActivityBar;
