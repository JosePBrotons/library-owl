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
        height: 150,
        width: 150,
        borderRadius: 300,
        marginVertical: 20,
        borderColor: COLORS.blue,
        borderWidth: 2,
    },
});
