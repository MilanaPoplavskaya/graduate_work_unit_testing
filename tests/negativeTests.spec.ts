import { RegistrationForm } from "../registrationForm/registrationForm";
import { expect } from "chai";
import { ACTUAL_VALUE } from "../fixtures/actualValue";
import { EXPECTED_VALUE } from "../fixtures/expectedValue";

const {
    expectedName, expectedLogin, expectedPassword,
    expectedEmail, digitsOfPassword, symbolOfEmail, whitespace, negativeType,
} = EXPECTED_VALUE;

const { actualName, actualLogin, actualPassword, actualEmail } = ACTUAL_VALUE;

describe("Testing the registration form: negative", () => {

    it("Name testing: negative(1)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(expectedName.toLowerCase());
    });
    it("Name testing: negative(2)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(whitespace);
    });
    it("Name testing: negative(3)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.not.eq(expectedName.slice(0, 2)
            .concat(whitespace)
            .concat(expectedName.slice(2, 6)));
    });
    it("Login testing: negative(1)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.be.a(negativeType);
    });
    it("Login testing: negative(2)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.eq(whitespace);
    });
    it("Login testing: negative(3)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.not.eq(expectedLogin.slice(0, 8)
            .concat(whitespace)
            .concat(expectedLogin.slice(8, 13)));
    });
    it("Password testing: negative (1)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.eq(expectedPassword
            .endsWith(digitsOfPassword));
    });
    it("Password testing: negative (2)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.include(digitsOfPassword
            .repeat(2));
    });
    it("Password testing: negative (3)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.not.be.a(negativeType);
    });
    it("Email testing: negative (1)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.eq(expectedEmail
            .startsWith(symbolOfEmail));
    });
    it("Email testing: negative (2)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.include(symbolOfEmail
            .repeat(2));
    });
    it("Email testing: negative (3)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.not.be.a(negativeType);
    });
});