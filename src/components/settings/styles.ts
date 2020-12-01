import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: COLORS.lighterBlue,
        alignItems: 'center',
    },
    scrollContainer: {
        backgroundColor: COLORS.lighterBlue,
    },
    name: {
        ...FONTS.h3,
        color: COLORS.darkGray,
    },
    email: {
        ...FONTS.body3,
        color: COLORS.gray,
    },
    age: {
        ...FONTS.body3,
        color: COLORS.gray,
        marginBottom: 20,
    },
    profileImg: {
        height: 120,
        width: 120,
        borderRadius: 300,
        marginVertical: 20,
        borderColor: COLORS.blue,
        borderWidth: 2,
    },
    navBarTitle: {
        ...FONTS.h2,
        color: COLORS.white,
        textAlign: 'center',
    },
});
