import { StyleSheet } from 'react-native';
import { FONTS } from '../../../constants/theme';
import { theme } from './../../../constants';

const { COLORS } = theme;

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.lighterGray,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        zIndex: 100,
        height: 40,
    },
    text: {
        ...FONTS.body3,
        color: COLORS.white,
        marginHorizontal: 10,
    },
});
