// Changer l'url pour pointer vers votre script RRFRemote.js

var url = "https://" + window.location.hostname + ":3443/?cmd=";

// Ne rien changer en dessous...

var speechRecognition = new window.webkitSpeechRecognition();

//speechRecognition.continuous = true;

function speak(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speechSynthesis.speak(speech);
}

function handleResult({ results }) {
  var captured = results[0][0].transcript;

  captured = captured.toLowerCase();

  if(captured.includes("perroquet")) {
    captured = "Perroquet";
    httpGet(95, captured);
  }
  else if(captured.includes("appel") || captured.includes("rf")) {
    captured = "Salon d'appel RRF";
    httpGet(96, captured);
  }
  else if(captured.includes("french") || captured.includes("phone")) {
    captured = "French Open Network";
    httpGet(97, captured);
  }
  else if(captured.includes("technique")) {
    captured = "Salon Technique";
    httpGet(98, captured);
  }
  else if(captured.includes("international")) {
    captured = "Salon International";
    httpGet(99, captured);
  }
  else if(captured.includes("bavardage")) {
    captured = "Salon Bavardage";
    httpGet(100, captured);
  }
  else if(captured.includes("local")) {
    captured = "Salon Local";
    httpGet(101, captured);
  }
  else if(captured.includes("experimental")) {
    captured = "Salon Experimental";
    httpGet(102, captured);
  }
  else if(captured.includes("raptor")) {
    captured = "Raptor";
    httpGet(200, captured);
  }
  else {
    captured = "Command inconnue";
    speak(captured);
  }
}

function httpGet(command, captured)
{
  var xmlHttp = new XMLHttpRequest();

  speak(captured);
  
  console.log(url + command);
  xmlHttp.open( "GET", url + command, false); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

circlein.addEventListener('click', () => {
  speechRecognition.start();
  speechRecognition.onresult = handleResult;
  speechRecognition.onspeechend = function() {
    speechRecognition.stop();
  }
});
