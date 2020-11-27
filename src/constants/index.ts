import theme, { COLORS } from './theme';

const emailRegExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export { theme, COLORS, emailRegExp };
