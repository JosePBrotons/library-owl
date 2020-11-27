import { StyleSheet } from 'react-native';
import { theme } from './../../../constants/index';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    inputView: {
        width: '80%',
        backgroundColor: COLORS.whiteTwo,
        borderRadius: 5,
        height: 40,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        color: COLORS.darkGray,
    },
    inputText: {
        ...FONTS.body4,
        paddingLeft: 8,
        flex: 1,
        color: COLORS.darkGray,
    },
    icon: {
        ...FONTS.body3,
    },
});
