import {is_url} from '../src/client/js/nameChecker.js';
import { response } from 'express';


test("if is a valid Url", () => {
    expect(is_url('https://www.abc123.com')).toBeTruthy();
}); 

test("if is not a valid Url", () => {
    expect(is_url('.www.346/23@')).toBeFalsy();
}); 

test("if is Null", () => {
    expect(is_url('')).toBeNull();
}); 

