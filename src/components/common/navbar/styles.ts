import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
import { FONTS } from '../../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: COLORS.lighterBlue,
    },
    navbarImg: {
        width: '100%',
        height: 111,
        position: 'absolute',
        top: 0,
    },
    optionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 33,
    },
    empty: {
        height: 20,
        width: 20,
    },
    title: {
        ...FONTS.h2,
        color: COLORS.white,
        textAlign: 'center',
    },
    icon: {
        color: COLORS.white,
    },
});
