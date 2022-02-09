export const REGEX = {
    ONLY_LATIN_LETTERS_AND_NUMBERS: /^[a-zA-Z0-9]+$/,
    STARTS_WITH_LETTER: /^[a-zA-Z].*/,
    MINIMUM_ONE_NUMBER: /(?=.*[0-9])/g,
    MINIMUM_ONE_LOWERCASE: /(?=.*[a-z])/g,
    MINIMUM_ONE_UPPERCASE: /(?=.*[A-Z])/g,
    STARTS_WITH_UPPERCASE_LETTER: /^[A-Z].*/,
    ONLY_LATIN_LETTERS: /^[a-zA-Z]+$/,
    //eslint-disable-next-line max-len
    EMAIL:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};
