// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber() testing
test('760-345-0123 should be valid phone number', () => {
    expect(functions.isPhoneNumber("760-345-0123")).toBe(true);
});
test('(345)-124-9042 should be valid phone number', () => {
    expect(functions.isPhoneNumber("(345)-124-9042")).toBe(true);
});
test('3 should not be valid phone number', () => {
    expect(functions.isPhoneNumber("3")).toBe(false);
});
test('760 345 0123 should not be a valid phone number', () => {
    expect(functions.isPhoneNumber("760 345 0123")).toBe(false);
});


//isEmail() testing
test('qwer@gmail.com should be valid email', () => {
    expect(functions.isEmail("qwer@gmail.com")).toBe(true);
});
test('qwer@fafsa.gov should be valid email ', () => {
    expect(functions.isEmail("qwer@fafsa.gov")).toBe(true);
});
test('qwer@@usa.gov should not be valid email', () => {
    expect(functions.isEmail("qwer@@usa.gov")).toBe(false);
});
test('qwergmail.com should not be valid email', () => {
    expect(functions.isEmail("qwergmail.com")).toBe(false);
});


//isStrongPassword() testing
test('R__gerg should be strong password', () => {
    expect(functions.isStrongPassword("R__gerg")).toBe(true);
});
test('Rt45 should be strong password', () => {
    expect(functions.isStrongPassword("Rt45")).toBe(true);
});
test('a should not be strong password', () => {
    expect(functions.isStrongPassword("a")).toBe(false);
});
test('r498j34rf3feg9oghogi is not strong password (invalid len)', () => {
    expect(functions.isStrongPassword("r498j34rf3feg9oghogi")).toBe(false);
});


//isDate() testing
test('12/03/2021 should be valid date', () => {
    expect(functions.isDate("12/03/2021")).toBe(true);
});
test('1/5/2003 should be valid date', () => {
    expect(functions.isDate("1/5/2003")).toBe(true);
});
test('1/5/03 should be invalid date', () => {
    expect(functions.isDate("1/5/03")).toBe(false);
});
test('5/3 should be invalid date', () => {
    expect(functions.isDate("5/3")).toBe(false);
});


//isHexColor() testing
test('#34A7E3 is valid Hex color', () => {
    expect(functions.isHexColor("#34A7E3")).toBe(true);
});
test('#456 is valid hex color', () => {
    expect(functions.isHexColor("#456")).toBe(true);
});
test('qw is not valid hex color', () => {
    expect(functions.isHexColor("qw")).toBe(false);
});
test('#34Z7E3 is not valid hex color', () => {
    expect(functions.isHexColor("#34Z7E3")).toBe(false);
});

