import { StyleSheet } from 'react-native';
import { FONTS } from '../../../constants/theme';
import { theme } from './../../../constants';

const { COLORS } = theme;

export const styles = StyleSheet.create({
    loadingCont: {
        flex: 1,
    },
    container: {
        backgroundColor: COLORS.lighterGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        color: COLORS.blue,
    },
    loadingModal: {
        width: '30%',
        paddingVertical: 20,
        borderRadius: 7,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },
    loadingText: {
        ...FONTS.h3,
        color: COLORS.darkGray,
        textAlign: 'center',
        marginTop: 8,
    },
});
