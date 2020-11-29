import { StyleSheet } from 'react-native';
import { theme } from '../../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    suggestionsContainer: {
        marginHorizontal: 10,
    },
    image: {
        width: 70,
        height: 100,
    },
    title: {
        ...FONTS.h3,
        color: COLORS.darkGray,
    },
    available: {
        ...FONTS.body3,
        color: COLORS.green,
    },
    author: {
        ...FONTS.body4,
        color: COLORS.gray,
    },
    publish: {
        ...FONTS.body4,
        color: COLORS.gray,
    },
    genre: {
        ...FONTS.body4,
        color: COLORS.gray,
    },
});
