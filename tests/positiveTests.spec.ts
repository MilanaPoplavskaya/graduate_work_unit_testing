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

    it("Name testing: positive (1)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.eq(expectedName);
    });
    it("Name testing: positive (2)", () => {
        expect(RegistrationForm.enterYourName(actualName.concat(digits))).to.eq(expectedName.concat(digits));
    });
    it("Name testing: positive (3)", () => {
        expect(RegistrationForm.enterYourName(actualName)).to.be.a(expectedType);
    });
    it("Login testing: positive (1)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.eq(expectedLogin);
    });
    it("Login testing: positive (2)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.be.a(expectedType);
    });
    it("Login testing: positive (3)", () => {
        expect(RegistrationForm.enterYourLogin(actualLogin)).to.include(digitsOfLogin);
    });
    it("Password testing: positive (1)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.eq(expectedPassword);
    });
    it("Password testing: positive (2)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.include(digitsOfPassword);
    });
    it("Password testing: positive (3)", () => {
        expect(RegistrationForm.enterYourPassword(actualPassword)).to.be.a(expectedType);
    });
    it("Email testing: positive (1)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.eq(expectedEmail);
    });
    it("Email testing: positive (2)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.include(symbolOfEmail);
    });
    it("Email testing: positive (3)", () => {
        expect(RegistrationForm.enterYourEmail(actualEmail)).to.be.a(expectedType);
    });
});
