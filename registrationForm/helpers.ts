const emptyString: string = "";

export const getErrorInvalidNameOrEmail = (data: string): string => {
    if (data === emptyString) {
        return `${data} is required`;
    } else {
        return data;
    }
};
export const getErrorInvalidLoginOrPassword = (data: string): string => {
    if (data === emptyString) {
        return `${data} is required`;
    } else if (data.length < 7 || data.length > 13) {
        return `${data} must be of length 7 to 13`;
    } else {
        return data;
    }
};


