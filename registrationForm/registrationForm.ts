import { getErrorInvalidNameOrEmail, getErrorInvalidLoginOrPassword } from "./helpers";

export class RegistrationForm {

    static enterYourName(actualName: string): string {
        return getErrorInvalidNameOrEmail(actualName);
    }


    static enterYourLogin(actualLogin: string): string {
        return getErrorInvalidLoginOrPassword(actualLogin);
    }

    static enterYourPassword(actualPassword: string): string {
        return getErrorInvalidLoginOrPassword(actualPassword);
    }

    static enterYourEmail(actualEmail: string): string {
        return getErrorInvalidNameOrEmail(actualEmail);
    }
}