// Copyright (c) F4HWN Armel. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const fs = require('fs')
const https = require('https');
const port = 3443;
const version = "1.0.3";

const requestHandler = (request, response) => {
  console.log(request.url);
  const { exec } = require('child_process');
  const input = new URL('https://localhost/' + request.url);
  const cmd = parseInt(input.searchParams.get('cmd'));

  // Mapping for svxlink actions

  var qsy = { 
    95:   "/etc/spotnik/restart.default",
    96:   "/etc/spotnik/restart.rrf",
    97:   "/etc/spotnik/restart.fon",
    98:   "/etc/spotnik/restart.tec",
    99:   "/etc/spotnik/restart.int",
    100:  "/etc/spotnik/restart.bav",
    101:  "/etc/spotnik/restart.loc",
    102:  "/etc/spotnik/restart.exp",
    103:  "/etc/spotnik/restart.reg",
  };

  // Mapping for special command, if not integer

  var special = {
    2000: "*51",
    2001: "*", 
  }

  // Execute
  
  if (cmd > 0 && cmd < 3000) {
    var action = "";
    if (cmd in qsy) {
      action = qsy[cmd];
    }
    else if(cmd in special) {
      action = 'echo "' + special[cmd] + '#" > /tmp/dtmf_uhf';
    }
    else {
      action = 'echo "' + cmd + '#" > /tmp/dtmf_uhf';
    }
    exec(action);
    response.writeHead(200);
  }
}

const options = {
  key: fs.readFileSync('/opt/spotnik/gui/key.pem'),
  cert: fs.readFileSync('/opt/spotnik/gui/cert.pem'),
};

const server = https.createServer(options, requestHandler);

server.listen(port, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }
  console.log(`server is listening on ${port}`)
});