import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    btn: {
        width: '70%',
        backgroundColor: COLORS.blue,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    flat: {
        width: '70%',
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.blue,
        borderRadius: 20,
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
    flatText: {
        ...FONTS.h3,
        color: COLORS.blue,
    },
    disabled: {
        opacity: 0.5,
    },
});
