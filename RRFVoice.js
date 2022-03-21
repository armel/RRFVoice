const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const privateKey  = fs.readFileSync('selfsigned.key', 'utf8');
const certificate = fs.readFileSync('selfsigned.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};

app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = https.createServer(credentials, app);
const port = 4443;
server.listen(port);
console.debug('Server listening on port ' + port);