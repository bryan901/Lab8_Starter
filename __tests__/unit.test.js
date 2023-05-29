// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('123-456-7890 is valid', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('(123)456-7890 is valid', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('1-2-3 is invalid', () => {
    expect(functions.isPhoneNumber('1-2-3')).toBe(false);
});

test('(123)4-5 is invalid', () => {
    expect(functions.isPhoneNumber('(123)4-5')).toBe(false);
});

test('bryan@ucsd.edu is valid', () => {
    expect(functions.isEmail('bryan@ucsd.edu')).toBe(true);
});

test('bryan@gmail.com is valid', () => {
    expect(functions.isEmail('bryan@gmail.com')).toBe(true);
});

test('bryan@ucsd is invalid', () => {
    expect(functions.isEmail('bryan@ucsd')).toBe(false);
});

test('gmail.com is invalid', () => {
    expect(functions.isEmail('gmail.com')).toBe(false);
});

test('strongpassword is valid', () => {
    expect(functions.isStrongPassword('strongpassword')).toBe(true);
});

test('password123 is valid', () => {
    expect(functions.isStrongPassword('password123')).toBe(true);
});

test('123password is invalid', () => {
    expect(functions.isStrongPassword('123password')).toBe(false);
});

test('thispasswordiswaytoolong is invalid', () => {
    expect(functions.isStrongPassword('thispasswordiswaytoolong')).toBe(false);
});

test('8/7/2002 is valid', () => {
    expect(functions.isDate('8/7/2002')).toBe(true);
});

test('1/2/1999 is valid', () => {
    expect(functions.isDate('1/2/1999')).toBe(true);
});

test('1/2/3 is invalid', () => {
    expect(functions.isDate('1/2/3')).toBe(false);
});    

test('1/2 is invalid', () => {
    expect(functions.isDate('1/2')).toBe(false);
});

test('123 is valid', () => {
    expect(functions.isHexColor('123')).toBe(true);
});

test('123456 is valid', () => {
    expect(functions.isHexColor('123456')).toBe(true);

});

test('123 456 is invalid', () => {
    expect(functions.isHexColor('123 456')).toBe(false);

});

test('1 is invalid', () => {
    expect(functions.isHexColor('1')).toBe(false);

});