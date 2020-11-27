import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    description: {
        ...FONTS.body4,
        color: COLORS.gray,
        textAlign: 'center',
        marginLeft: 10,
    },
    icon: {
        ...FONTS.body2,
        color: COLORS.blue,
    },
});
