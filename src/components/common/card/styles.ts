import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const { COLORS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        width: '100%',
        elevation: 3,
        borderRadius: 5,
        shadowColor: COLORS.lighterGray,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        padding: 15,
    },
});
