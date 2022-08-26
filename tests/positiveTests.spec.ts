import { expect } from "chai";
import { RegistrationForm } from "../registrationForm/registrationForm";
import { EXPECTED_VALUE } from "../fixtures/expectedValuePositive";
import { ACTUAL_VALUE } from "../fixtures/commonActualValue";

const { actualName, actualLogin, actualPassword, actualEmail, digits } = ACTUAL_VALUE;

const {
    expectedName, expectedType, expectedLogin, expectedPassword,
    expectedEmail, digitsOfLogin, digitsOfPassword, symbolOfEmail,
} = EXPECTED_VALUE;

describe("Testing the registration form: positive", () => {

    it("Name testing: correct name", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.eq(expectedName);
    });
    it("Name testing: correct name with digits", () => {
        expect(RegistrationForm.enterYourName(actualName.concat(digits))).to.eq(expectedName.concat(digits));
    });
    it("Name testing: correct input type", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.be.a(expectedType);
    });
    it("Login testing: correct login", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.eq(expectedLogin);
    });
    it("Login testing: correct input type", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.be.a(expectedType);
    });
    it("Login testing: correct digits of login", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.include(digitsOfLogin);
    });
    it("Password testing: correct password", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.eq(expectedPassword);
    });
    it("Password testing: correct digits of password", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.include(digitsOfPassword);
    });
    it("Password testing: correct input type", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.be.a(expectedType);
    });
    it("Email testing: correct email", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.eq(expectedEmail);
    });
    it("Email testing: email should include symbol", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.include(symbolOfEmail);
    });
    it("Email testing: correct input type", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.be.a(expectedType);
    });
});