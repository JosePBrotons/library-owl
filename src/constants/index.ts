import theme, { COLORS } from './theme';

const emailRegExp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const tokenExp = new Date().getTime() + 3600 * 1000;
const tokenSecret = '2?n7#saidCL[Bw&SD99B2ydGAo3#.#r0qzo7Ykp/.';
const userDataKey = 'USER_DATA@:key';
const rentalsKey = 'RENTALS@:key';

export {
    theme,
    COLORS,
    emailRegExp,
    tokenExp,
    tokenSecret,
    rentalsKey,
    userDataKey,
};
