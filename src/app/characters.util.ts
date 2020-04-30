export let lowerCaseCharacters: string[] = [];
for (let i = 97; i < 123; i++) {
    lowerCaseCharacters.push(String.fromCharCode(i));
}

export let upperCaseCharacters = [];
for (let i = 65; i < 90; i++) {
    upperCaseCharacters.push(String.fromCharCode(i));
}

export let numberCharacters = [];
for (let i = 0; i < 10; i++) {
    numberCharacters.push(i.toString());
}

export function doesStringContainTypes(password: string, lower: boolean, upper: boolean, numbers: boolean, special: boolean, specialCharacters: string[]): boolean {
    const allCharacters = Array.from(password);
    let isValid: boolean = true;
    if (lower)
        isValid = isValid && allCharacters.some(lowerCaseMatcher);
    if (upper)
        isValid = isValid && allCharacters.some(upperCaseMatcher);
    if (numbers)
        isValid = isValid && allCharacters.some(numberMatcher);
    if (special)
        isValid = isValid && allCharacters.some(char => specialCharacters.includes(char));
    return isValid;
}

function lowerCaseMatcher(char): boolean {
    return lowerCaseCharacters.includes(char);
}

function upperCaseMatcher(char): boolean {
    return upperCaseCharacters.includes(char);
}

function numberMatcher(char): boolean {
    return numberCharacters.includes(char);
}
