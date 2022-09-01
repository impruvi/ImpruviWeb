export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PHONE_NUMBER_REGEX = /^[\+]?[1-2]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const isValidPassword = (password) => {
    return password && password.length > 0;
}

export const isValidEmail = (email) => {
    if (!email) {
        return false;
    }
    return !!email.match(EMAIL_REGEX);
};

export const isValidPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
        return false;
    }
    console.log(`phone number ${phoneNumber} if valid phone number`, phoneNumber.match(PHONE_NUMBER_REGEX));

    return !!phoneNumber.match(PHONE_NUMBER_REGEX);
}
