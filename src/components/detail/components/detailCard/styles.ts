import { StyleSheet } from 'react-native';
import { theme } from '../../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: '100%',
    },
    infoContainer: {
        alignItems: 'flex-start',
        width: '70%',
    },
    btnContainer: {
        flexDirection: 'column',
        marginVertical: 15,
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 100,
        marginHorizontal: 20,
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
