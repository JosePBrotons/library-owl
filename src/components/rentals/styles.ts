import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: COLORS.lighterBlue,
    },
    emptyContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLORS.lighterBlue,
    },
    emptyText: {
        ...FONTS.h3,
        width: '100%',
        color: COLORS.darkGray,
        textAlign: 'center',
        marginVertical: 20,
    },
    img: {
        height: 150,
        width: 150,
    },
    navBarTitle: {
        ...FONTS.h2,
        color: COLORS.white,
        textAlign: 'center',
    },
});
