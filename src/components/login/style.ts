import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
    },
    formContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },
    buttonContainer: {
        flex: 3,
        alignItems: 'center',
        marginVertical: 10,
    },
    greetingContainer: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 40,
        alignItems: 'flex-start',
    },
    title: {
        ...FONTS.h1,
        color: COLORS.black,
    },
    subheader: {
        ...FONTS.body2,
        color: COLORS.gray,
    },
    logo: {
        height: 100,
        width: 130,
        marginBottom: 20,
    },
    inputPlaceholder: {
        color: COLORS.blue
    }
});
