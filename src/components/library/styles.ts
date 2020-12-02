import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants/theme';
import { theme } from './../../constants';

const { COLORS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: COLORS.lighterBlue,
    },
    navBarTitle: {
        ...FONTS.h2,
        color: COLORS.white,
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
    },
    searchInput: {
        marginBottom: 0,
    },
});
