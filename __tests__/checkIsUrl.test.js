import "babel-polyfill";
const puppeteer = require('puppeteer');
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
    expect(addHttp(url)).toBe("http://www.url.com");
    const url2 = "http://www.url.com"
    expect(addHttp(url2)).toBe("http://www.url.com");
})


// e2e test checking outcome of a user input using puppeteer
test('testing browser input', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8081/');
    await page.click('input#name');
    await page.type('input#name','https://review.udacity.com/#!/rubrics/2668/view');
    await page.click('input#submit');
    await page.waitFor(7000);
    const finalText = await page.$eval('#result_message', el => el.textContent)
    expect(finalText).toBe('The URL sentiment is NEUTRAL and the subjectivity is OBJECTIVE')
}, 100000);