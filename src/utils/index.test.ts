import {
    isString,
    isBlank,
    isSafeDataType,
    firstString,
    isArrayLength,
    lastString,
    isValueLength,
} from '.';

describe('Suite test to isString() function', () => {
    test('Check if an object is a string', () => {
        const a = { foo: 'bar' };
        const expected = false;
        expect(isString(a)).toEqual(expected);
    });
    test('Check if an array is a string', () => {
        const a = [1, 2, 3];
        const expected = false;
        expect(isString(a)).toEqual(expected);
    });
    test('Check if a string is a string', () => {
        const a = 'Hello world';
        const expected = true;
        expect(isString(a)).toEqual(expected);
    });
    test('Check if an undefined is a number', () => {
        const a = undefined;
        const expected = false;
        expect(isString(a)).toEqual(expected);
    });
    test('Check if a null value is a number', () => {
        const a = null;
        const expected = false;
        expect(isString(a)).toEqual(expected);
    });
});

describe('Suite test utilities for isBlank() function', () => {
    test('Check if a string is empty', () => {
        const strToCheck = 'Hello world';
        const expected = false;
        expect(isBlank(strToCheck)).toEqual(expected);
    });
    test('Check if a string filled with empty spaces is empty', () => {
        const strToCheck = '         ';
        const expected = true;
        expect(isBlank(strToCheck)).toEqual(expected);
    });
    test('Check if a empty string is empty', () => {
        const strToCheck = '';
        const expected = true;
        expect(isBlank(strToCheck)).toEqual(expected);
    });
    test('Check if an undefined value is an empty string', () => {
        const strToCheck = undefined;
        const expected = true;
        expect(isBlank(strToCheck)).toEqual(expected);
    });
    test('Check if a null value is an empty string', () => {
        const strToCheck = null;
        const expected = false;
        expect(isBlank(strToCheck)).toEqual(expected);
    });
});

describe('Suite test utilities for firstString() function', () => {
    test('Get first character of a string', () => {
        const strToCheck = 'Lyrics';
        const expected = 'L';
        expect(firstString(strToCheck, 1)).toEqual(expected);
    });
    test('Get the firsts six characters of a string', () => {
        const strToCheck = 'Lyrics';
        const expected = 'Lyric';
        expect(firstString(strToCheck, 5)).toEqual(expected);
    });
    test('Get the first character of a null value', () => {
        const strToCheck = null;
        const expected = '';
        expect(firstString(strToCheck, 1)).toEqual(expected);
    });
    test('Get the first character of an undefined value', () => {
        const strToCheck = undefined;
        const expected = '';
        expect(firstString(strToCheck, 1)).toEqual(expected);
    });
});

describe('Suite test lastString() function', () => {
    test('Get the last 8 characters of a string', () => {
        const creditStr = 'Viva la vida - Coldplay';
        const charQuantity = 8;
        const expected = 'Coldplay';
        expect(lastString(creditStr, charQuantity)).toEqual(expected);
    });
    test('Get the last four characters of a string', () => {
        const strToCheck = 'Lyrics';
        const charQuantity = 4;
        const expected = 'rics';
        expect(lastString(strToCheck, charQuantity)).toEqual(expected);
    });
    test('Get the last character of a null value', () => {
        const strToCheck = null;
        const expected = '';
        expect(lastString(strToCheck, 1)).toEqual(expected);
    });
    test('Get the last character of an undefined value', () => {
        const strToCheck = undefined;
        const expected = '';
        expect(lastString(strToCheck, 1)).toEqual(expected);
    });
});

describe('Suite test for isSafeDataType() function', () => {
    test('Check if a number value is a safe data type', () => {
        const numToCheck = 12;
        const expected = true;
        expect(isSafeDataType(numToCheck)).toEqual(expected);
    });
    test('Check if an object is a safe data type', () => {
        const objToCheck = { first: 'Almundo', last: 'Almundo' };
        const expected = true;
        expect(isSafeDataType(objToCheck)).toEqual(expected);
    });
    test('Check if an array is a safe data type', () => {
        const arrToCheck = [1, 'Almundo'];
        const expected = true;
        expect(isSafeDataType(arrToCheck)).toEqual(expected);
    });
    test('Check if a string is a safe data type', () => {
        const strToCheck = 'Almundo';
        const expected = true;
        expect(isSafeDataType(strToCheck)).toEqual(expected);
    });
    test('Check if a null value is a safe data type', () => {
        const dataToCheck = null;
        const expected = false;
        expect(isSafeDataType(dataToCheck)).toEqual(expected);
    });
    test('Check if an undefined value is a safe data type', () => {
        const dataToCheck = undefined;
        const expected = false;
        expect(isSafeDataType(dataToCheck)).toEqual(expected);
    });
});

describe('Suite test utilities for isArrayLength() function', () => {
    test('Check if one array value has greater than a number value', () => {
        const a = [1, 2, 3];
        const b = 3;
        const expected = false;
        expect(isArrayLength(a, 'greater', b)).toEqual(expected);
    });
    test('Check if one array value has lower than a number value', () => {
        const a = [1, 2];
        const b = 3;
        const expected = true;
        expect(isArrayLength(a, 'lower', b)).toEqual(expected);
    });
    test('Check if one array value is equal than the given number value', () => {
        const a = [1, 2];
        const b = 2;
        const expected = true;
        expect(isArrayLength(a, 'equal', b)).toEqual(expected);
    });
    test('Check if one array value is lower or equal than the given number value', () => {
        const a = [1, 2];
        const b = 1;
        const expected = false;
        expect(isArrayLength(a, 'lowOrEq', b)).toEqual(expected);
    });
    test('Check if one array value is greater or equal than the given number value', () => {
        const a = [1, 2];
        const b = 1;
        const expected = true;
        expect(isArrayLength(a, 'greatOrEq', b)).toEqual(expected);
    });
    test('Check if a null value is lower or equal than the given number value', () => {
        const a = null;
        const b = 1;
        const expected = false;
        expect(isArrayLength(a, 'greater', b)).toEqual(expected);
    });
    test('Check if an undefined value is lower or equal than the given number value', () => {
        const a = undefined;
        const b = 1;
        const expected = false;
        expect(isArrayLength(a, 'equal', b)).toEqual(expected);
    });
    test('Check if a misspelled condition is equal to the given number value', () => {
        const a = [1, 2];
        const b = 1;
        const expected = false;
        expect(isArrayLength(a, 'eqal', b)).toEqual(expected);
    });
});

describe('Suite test utilities for isValueLength() function', () => {
    test('Check if one string has greater length than a number value', () => {
        const a = 'Jos'.length;
        const b = 3;
        const expected = false;
        expect(isValueLength(a, 'greater', b)).toEqual(expected);
    });
    test('Check if one string has lower length than a number value', () => {
        const a = 'Jo'.length;
        const b = 3;
        const expected = true;
        expect(isValueLength(a, 'lower', b)).toEqual(expected);
    });
    test('Check if one string has the same length than the given number value', () => {
        const a = 'Jo'.length;
        const b = 2;
        const expected = true;
        expect(isValueLength(a, 'equal', b)).toEqual(expected);
    });
    test('Check if one string value has lower or equal length than the given number value', () => {
        const a = 'Jo'.length;
        const b = 1;
        const expected = false;
        expect(isValueLength(a, 'lowOrEq', b)).toEqual(expected);
    });
    test('Check if one string has greater or equal length than the given number value', () => {
        const a = 'Jo'.length;
        const b = 1;
        const expected = true;
        expect(isValueLength(a, 'greatOrEq', b)).toEqual(expected);
    });
    test('Check if a null value has lower or equal length than the given number value', () => {
        const a = null;
        const b = 1;
        const expected = false;
        expect(isValueLength(a, 'greater', b)).toEqual(expected);
    });
    test('Check if an undefined value has lower or equal length than the given number value', () => {
        const a = undefined;
        const b = 1;
        const expected = false;
        expect(isValueLength(a, 'equal', b)).toEqual(expected);
    });
    test('Check if a misspelled condition is equal to the given number value', () => {
        const a = 'Jose'.length;
        const b = 1;
        const expected = false;
        expect(isValueLength(a, 'eqal', b)).toEqual(expected);
    });
});
