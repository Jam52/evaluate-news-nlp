const addImg = require('./addImg');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const urlRadioSelected = document.getElementById('url').checked;

    if(urlRadioSelected) {
        if (Client.checkForUrl(formText)){
            try {
                console.log("::: URL Form Submitted :::")
                console.log(formText);
                postData('/all', {data: formText, type: "url"})
                .then(updateUI()) 
            } catch(e) {
                console.log('error: ' + e)
                document.getElementById('result_message').textContent = 'Invalid Url';
            }
        } else {
            console.log("::: TEXT Form Submitted :::")
            console.log(formText);
            postData('/all', {data: formText, type: "text"})
            .then(updateUI())
        }
    }

}

async function updateUI() {
    const data = await getClassification('/all');
    const sentimentImg = document.getElementById('sentiment');
    const subjectivityImg = document.getElementById('subjectivity');
    Client.addImg.setImg(sentimentImg, await data.polarity, Client.addImg.getImg(await data.polarity));
    Client.addImg.setImg(subjectivityImg, await data.subjectivity, Client.addImg.getImg(await data.subjectivity), 'subjectivity');
}

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

export { handleSubmit }