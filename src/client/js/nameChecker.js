function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    if (is_url(inputText)){
        console.log('input is a valid Url')
        return true;
    } else if (is_url(inputText) == false) {
        console.log('input is NOT a valid Url')
        return false;
    } else {
        console.log('input is NULL')
        return null;
    }
    
}

function is_url(str) {
    const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (str) {
        if (regexp.test(str)) {
             return true;
        } else {   
            return false;
        }
    } else {
        return null;
    }
}

export { 
    checkForUrl,
    is_url
 }

