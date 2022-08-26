import { expect } from "chai";
import { RegistrationForm } from "../registrationForm/registrationForm";
import { ACTUAL_VALUE } from "../fixtures/commonActualValue";
import { WHITESPACE, NEGATIVE_TYPE } from "../fixtures/expectedValueNegative";
import {
    getNameSlice, getLoginSlice, getRepeatSymbol, getRepeatDigits, getLowerCaseName, getEndOfPassword, getStartOfEmail,
} from "../fixtures/expectedValueNegative";

const { actualName, actualLogin, actualPassword, actualEmail } = ACTUAL_VALUE;

describe("Testing the registration form: negative", () => {

    it("Name testing: entered incorrect name with lowerCase", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(getLowerCaseName());
    });
    it("Name testing: entered incorrect name: empty field", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(WHITESPACE);
    });
    it("Name testing: entered incorrect name with whitespace", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(getNameSlice());
    });
    it("Login testing: incorrect input type", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.be.a(NEGATIVE_TYPE);
    });
    it("Login testing: empty field", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.eq(WHITESPACE);
    });
    it("Login testing: entered incorrect login with whitespace", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.eq(getLoginSlice());
    });
    it("Password testing: incorrect end of password", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.eq(getEndOfPassword());
    });
    it("Password testing: repeat end os password", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.include(getRepeatDigits());
    });
    it("Password testing: incorrect input field", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.be.a(NEGATIVE_TYPE);
    });
    it("Email testing: incorrect start of email", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.eq(getStartOfEmail());
    });
    it("Email testing: invalid email", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.include(getRepeatSymbol());
    });
    it("Email testing: incorrect input type", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.be.a(NEGATIVE_TYPE);
    });
});