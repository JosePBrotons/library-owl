import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: COLORS.whiteTwo,
        borderRadius: 5,
        height: 40,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        color: COLORS.darkGray,
    },
    hidden: {
        height: 40
    },
    expanded: {
        height: 115
    },
    label: {
        ...FONTS.body4,
        color: COLORS.blue,
        paddingLeft: 8,
    },
    ages: {
        marginVertical: 8
    }
});
