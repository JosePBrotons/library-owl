import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: COLORS.lighterBlue,
    }
});
