import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    btn: {
        width: '70%',
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
    },

    btnText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    disabled: {
        opacity: 0.5,
    },
});
