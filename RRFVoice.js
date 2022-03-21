const fs = require('fs')
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
//const server = http.createServer(app);

const server = https.createServer(
{
key: fs.readFileSync('key.pem'),
cert: fs.readFileSync('cert.pem'),
},
app
)

const port = 4443;

server.listen(port);
console.debug('Server listening on port ' + port);