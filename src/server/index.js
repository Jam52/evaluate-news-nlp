//incoming formData endpoint
const formData = {};

//set up dotenv for credential files
const dotEnv = require('dotenv')
dotEnv.config();

//set up express
const express = require('express');
const app = express();

//dependencies and middlewear
var path = require('path');
const bParser = require('body-parser');
const cor = require('cors')

//use dependencies and middlewear
app.use(express.static('dist'));
app.use(bParser.urlencoded({extended: false}));
app.use(bParser.json());
app.use(cor());


//set up aylien API
var AYLIENTextApi = require('aylien_textapi');
var textApi = new AYLIENTextApi({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

//get entry index
app.get('/', function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
});


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// use api and GET data
app.get('/all', apiCall) 


// POST url to formData
app.post('/all', (req,res) => {
  console.log(req.body)
  formData.url = req.body.url;
})



//API callback function
function apiCall (req , res) {
  try {
    textApi.sentiment({'url': formData.url}, function(error, response) {
      console.log(error);
      if (error === null) {
        console.log('IN_API_CALL '+ response);
        res.send(response)
      }
    });
  } catch(e) {
      console.log(e);
  }
}
