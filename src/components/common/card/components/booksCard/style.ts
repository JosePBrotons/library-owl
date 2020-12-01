import { StyleSheet } from 'react-native';
import { theme } from '../../../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: COLORS.lighterBlue,
    },
    cardContainer: {
        flexDirection: 'row',
    },
    infoContainer: {
        justifyContent: 'flex-start',
        width: '70%',
    },
    image: {
        width: 60,
        height: 90,
        marginRight: 20,
    },
    title: {
        ...FONTS.h3,
        color: COLORS.darkGray,
    },
    author: {
        ...FONTS.body3,
        color: COLORS.gray,
    },
});
