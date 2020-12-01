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
    loading: {
        color: COLORS.blue,
        marginVertical: 10,
    },
    navBarTitle: {
        ...FONTS.h2,
        color: COLORS.white,
        textAlign: 'center',
    },
});
