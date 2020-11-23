import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    black: 'rgba(30, 31, 32, 1)',
    white: 'rgba(255, 255, 255, 1)',
    whiteTwo: 'rgba(248, 248, 248, 1)',
    gray: 'rgba(106, 106, 106, 1)',
};
export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    width,
    height,
};
export const FONTS = {
    h1: { fontFamily: 'Nunito-Black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Nunito-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Nunito-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Nunito-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: {
        fontFamily: 'Nunito-Regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
    },
    body2: {
        fontFamily: 'Nunito-Regular',
        fontSize: SIZES.body2,
        lineHeight: 30,
    },
    body3: {
        fontFamily: 'Nunito-Regular',
        fontSize: SIZES.body3,
        lineHeight: 22,
    },
    body4: {
        fontFamily: 'Nunito-Regular',
        fontSize: SIZES.body4,
        lineHeight: 22,
    },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
