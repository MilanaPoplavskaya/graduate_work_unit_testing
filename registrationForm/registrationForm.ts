const emptyString: string = "";

export class RegistrationForm {

    static enterYourName(actualName: string): string {
        if (actualName === emptyString) {
            return `${actualName} is required`;
        } else {
            return actualName;
        }
    }

    static enterYourLogin(actualLogin: string): string {
        if (actualLogin === emptyString) {
            return `${actualLogin} is required`;
        } else if (actualLogin.length < 7 || actualLogin.length > 13) {
            return `${actualLogin} must be of length 7 to 13`;
        } else {
            return actualLogin;
        }
    }

    static enterYourPassword(actualPassword: string): string {
        if (actualPassword === emptyString) {
            return `${actualPassword} is required`;
        } else if (actualPassword.length < 7 || actualPassword.length > 13) {
            return `${actualPassword} must be of length 7 to 13`;
        } else {
            return actualPassword;
        }
    }

    static enterYourEmail(actualEmail: string): string {
        if (actualEmail === emptyString) {
            return `${actualEmail} is required and must be valid. For example: domain@gmail.com`;
        } else {

            return actualEmail;
        }
    }
}