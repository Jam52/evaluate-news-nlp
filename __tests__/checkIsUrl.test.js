import {is_url} from '../src/client/js/nameChecker.js';
import {addHttp} from '../src/client/js/formHandler.js';

//unit test for URL unput
test("testing result of URL input", () => {
    expect(is_url('https://www.abc123.com')).toBeTruthy();
    expect(is_url('.www.346/23@')).toBeFalsy();
    expect(is_url('')).toBeNull();
}); 


test("if adds http://", () => {
    const url = "www.url.com"
    expect(addHttp(url).toBe("http://www.url.com"));
})

