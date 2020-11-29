import { StyleSheet } from 'react-native';
import { theme } from '../../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 50,
        width: 50,
        height: 50,
        marginRight: 9,
    },
    username: {
        ...FONTS.h3,
        color: COLORS.darkGray,
    },
    comment: {
        ...FONTS.body4,
        color: COLORS.gray,
        textAlign: 'left',
    },
    commentCardCont: {
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    commentContainer: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        width: '85%',
    },
    showAll: {
        alignItems: 'center',
        marginVertical: 15,
    },
    showAllTxt: {
        ...FONTS.h3,
        color: COLORS.blue,
    },
});
