import {is_url} from '../src/client/js/nameChecker.js';
import {addHttp} from '../src/client/js/formHandler.js';

//unit test for URL input from nameChecker
test("testing result of URL input", () => {
    expect(is_url('https://www.abc123.com')).toBeTruthy();
    expect(is_url('.www.346/23@')).toBeFalsy();
    expect(is_url('')).toBeNull();
}); 


//unit test on adding http:// to a url without one
test("if adds http://", () => {
    const url = "www.url.com"
    expect(addHttp(url).toBe("http://www.url.com"));
    const url2 = "http://www.url.com"
    expect(addHttp(url2).toBe("http://www.url.com"));
})

