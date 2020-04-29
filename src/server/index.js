const urlContent = {};

var path = require('path');
const express = require('express');
const bParser = require('body-parser');
const cor = require('cors');

const dotenv = require('dotenv');
dotenv.config();

var AYLINETextApi = require('aylien_textapi');

var textApi = new AYLINETextApi({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(bParser.urlencoded({extended: false}));
app.use(bParser.json());
app.use(cor());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/all', function (req, res) {
    const sentiment = textapi.sentiment({
        'url': urlContent.url
      }, function(error, response) {
        if (error === null) {
          console.log(response);
        }
      });
    
    res.send(sentiment);
})

app.post('/all', (res,req) => {
  console.log(res.body)
  urlContent.url = res.body.url;
  
})
