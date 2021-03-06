//incoming formData endpoint
const data = {};

//setting port with heroku
const PORT = process.env.PORT || 8080;

//set up dotenv for credential files
const dotEnv = require('dotenv');
dotEnv.config();

//set up express
const express = require('express');
const app = express();

//dependencies and middlewear
var path = require('path');
const bParser = require('body-parser');
const cor = require('cors');

//use dependencies and middlewear
app.use(express.static('./dist'));
app.use(bParser.urlencoded({ extended: false }));
app.use(bParser.json());
app.use(cor());

//set up aylien API
var AYLIENTextApi = require('aylien_textapi');
var textApi = new AYLIENTextApi({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

//get entry index
app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log('Example app listening on port 8080!');
});

// use api and GET data
app.get('/all', apiCall);

// POST url to formData
app.post('/all', (req, res) => {
  console.log(req.body);
  data.data = req.body.data;
  data.type = req.body.type;
});

//API callback function
function apiCall(req, res) {
  if (data.type === 'url') {
    try {
      textApi.sentiment({ url: data.data }, function (error, response) {
        console.log(error);
        if (error === null) {
          console.log('IN_API_CALL ' + response);
          res.send(response);
        } else {
          res.send({ error: 'Invalid Input' });
        }
      });
    } catch (e) {
      console.log(e);
      res.send({ error: 'Invalid Input' });
    }
  } else {
    try {
      textApi.sentiment({ text: data.data }, function (error, response) {
        console.log(error);
        if (error === null) {
          console.log('IN_API_CALL ' + response);
          res.send(response);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}
