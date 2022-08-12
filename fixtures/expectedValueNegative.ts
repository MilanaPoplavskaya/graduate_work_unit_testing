import { EXPECTED_VALUE } from "./expectedValuePositive";

export const whitespace = " ";
export const negativeType = "number|symbol";

const { expectedName, expectedLogin, expectedPassword, digitsOfPassword, expectedEmail, symbolOfEmail } = EXPECTED_VALUE;

export const getNameSlice = (): string => {
    return expectedName.slice(0, 2)
        .concat(whitespace)
        .concat(expectedName.slice(2, 6));
};
export const getLoginSlice = (): string => {
    return expectedLogin.slice(0, 8)
        .concat(whitespace)
        .concat(expectedLogin.slice(8, 13));
};
export const getRepeatSymbol = (): string => {
    return symbolOfEmail
        .repeat(2);
};
export const getRepeatDigits = (): string => {
    return digitsOfPassword
        .repeat(2);
};
export const getLowerCaseName = (): string => {
    return expectedName.toLowerCase();
};
export const getEndOfPassword = (): boolean => {
    return expectedPassword.endsWith(digitsOfPassword);
};
export const getStartOfEmail = (): boolean => {
    return expectedEmail
        .startsWith(symbolOfEmail);
};