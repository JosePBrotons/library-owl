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
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    btnContainer: {
        flexDirection: 'column',
        marginVertical: 15,
        alignItems: 'center'
    },
    suggestionsContainer: {
        marginHorizontal: 10
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
