const functions = require('../src/client/js/nameChecker.js')

test("if is a valid Url", () => {
    expect(functions.is_url('https://www.abc123.com')).toBeTruthy();
}); 

test("if is not a valid Url", () => {
    expect(functions.is_url('.www.346/23@')).toBeFalsy();
}); 

test("if is Null", () => {
    expect(functions.is_url('')).toBeNull();
}); 
