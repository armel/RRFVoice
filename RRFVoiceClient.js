const fs = require('fs')
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const port = 4443;
const version = 0.1;

app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

const options = {
  key: fs.readFileSync('192.168.1.250+3-key.pem'),
  cert: fs.readFileSync('192.168.1.250+3.pem'),
};

const server = https.createServer(options, app);

server.listen(port, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }
  console.log(`server is listening on ${port}`)
});