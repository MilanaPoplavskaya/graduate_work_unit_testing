import { expect } from "chai";
import { RegistrationForm } from "../registrationForm/registrationForm";
import { ACTUAL_VALUE } from "../fixtures/commonActualValue";
import { whitespace, negativeType } from "../fixtures/expectedValueNegative";
import {
    getNameSlice, getLoginSlice, getRepeatSymbol, getRepeatDigits, getLowerCaseName, getEndOfPassword, getStartOfEmail,
} from "../fixtures/expectedValueNegative";

const { actualName, actualLogin, actualPassword, actualEmail } = ACTUAL_VALUE;

describe("Testing the registration form: negative", () => {

    it("Name testing: negative(1)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(getLowerCaseName());
    });
    it("Name testing: negative(2)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(whitespace);
    });
    it("Name testing: negative(3)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(getNameSlice());
    });
    it("Login testing: negative(1)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.be.a(negativeType);
    });
    it("Login testing: negative(2)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.eq(whitespace);
    });
    it("Login testing: negative(3)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.eq(getLoginSlice());
    });
    it("Password testing: negative (1)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.eq(getEndOfPassword());
    });
    it("Password testing: negative (2)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.include(getRepeatDigits());
    });
    it("Password testing: negative (3)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.be.a(negativeType);
    });
    it("Email testing: negative (1)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.eq(getStartOfEmail());
    });
    it("Email testing: negative (2)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.include(getRepeatSymbol());
    });
    it("Email testing: negative (3)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.be.a(negativeType);
    });
});