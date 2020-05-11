function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    const resultMsg = document.getElementById('result_message');

    //if form has text run 
    if(formText.length > 0) {
        //if text is a url
        if (Client.checkForUrl(formText)){
            resultMsg.textContent = 'Calculating subjectivity!';
            try {
                console.log("::: URL Form Submitted :::")
                console.log(formText);
                postData('/all', {data: addHttp(formText), type: "url"})
                .then(updateUI('URL')) 
            } catch(e) {
                console.log('error: ' + e)
            }
        } else {
            //if not a url check against text
            resultMsg.textContent = 'Calculating subjectivity!';
            try {
                console.log("::: TEXT Form Submitted :::")
                console.log(formText);
                postData('/all', {data: formText, type: "text"})
                .then(updateUI('TEXT'))
            } catch(e) {
                console.log(e);
            }
        }
    } else {
        resultMsg.textContent = 'Please enter some input';
    }

}

//Update the up with the data from GET request
async function updateUI(msg) {
    try {
        const data = await getClassification('/all');
        const sentiment = await data.polarity;
        const subjectivity = await data.subjectivity;
        if ('error' in await data) {
            document.getElementById('result_message').textContent = 'Invalid Input'
        } else {
            document.getElementById('result_message').textContent = `The ${msg.toUpperCase()} sentiment is ${sentiment.toUpperCase()} and the subjectivity is ${subjectivity.toUpperCase()}`;
        }
    } catch(e) {
        console.log('update error: ' + e)
        resultMsg.textContent = 'Invalid Input';
    }
}

//GET request
const getClassification = async (url='') => {
    const request = await fetch(url);
    try {
        const allData = await request.json()
        console.log('getData');
        console.log(allData);
        return allData;
    } catch(e) {
        console.log("getData error: ", e);
    };
}

//POST request 
const postData = async (url='', data={}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),      
      });

      try {
        const newData = await response.json();
        return newData;
      }catch(error) {
      console.log("error", error);
      }
}

//adding http for API call
function addHttp(input) {
    const reg = new RegExp("^(http|https)://", "i");
    if(input.match(reg)) {
        return input;
    } else {
        return 'http://' + input;
    }
}

export { 
    handleSubmit,
    addHttp
 }