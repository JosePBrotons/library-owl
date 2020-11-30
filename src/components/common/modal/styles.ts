import { StyleSheet } from 'react-native';
import { FONTS } from '../../../constants/theme';
import { theme } from './../../../constants';

const { COLORS } = theme;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lighterGray,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    modalContainer: {
        width: '70%',
        paddingVertical: 15,
        borderRadius: 7,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },
    messageContainer: {
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        paddingTop: 5,
        borderTopColor: COLORS.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
    },
    title: {
        ...FONTS.h3,
        color: COLORS.black,
        textAlign: 'center',
    },
    message: {
        ...FONTS.body3,
        color: COLORS.darkGray,
        marginVertical: 15,
        textAlign: 'center',
    },
    ok: {
        ...FONTS.h4,
        color: COLORS.blue,
        textAlign: 'center',
        width: '100%',
    },
});
