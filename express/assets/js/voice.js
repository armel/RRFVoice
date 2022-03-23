var url = "https://" + window.location.hostname + ":3443/?cmd=";
var speechRecognition = new window.webkitSpeechRecognition();

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
  else if(captured.includes("rimental")) {
    captured = "Salon Expérimental";
    httpGet(102, captured);
  }
  else if(captured.includes("régional")) {
    captured = "Salon Régional";
    httpGet(103, captured);
  }
  else if(captured.includes("raptor")) {
    captured = "Raptor";
    httpGet(200, captured);
  }
  else if(captured.includes("redémarre") || captured.includes("reboot")) {
    captured = "Redémarrage en cours !";
    httpGet(1000, captured);
  }
  else if(captured.includes("shutdown") || captured.includes("arrêt")) {
    captured = "Arrêt en cours !";
    httpGet(1001, captured);
  }
  else if(captured.includes("scan") || captured.includes("scanner")) {
    captured = "D'accord, voyons s'il y a des QSO en cours ?";
    httpGet(201, captured);
  }
  else if(captured.includes("météo") || captured.includes("WX")) {
    captured = "Voici la météo";
    httpGet(2000, captured);
  }
  else if(captured.includes("information") || captured.includes("info")) {
    captured = "Voici les informations";
    httpGet(2001, captured);
  }
  else if(captured.includes("marseille") || captured.includes("marseillais")) {
    captured = "Puisque tu y tiens, je t'envois sur le salon Bavardage !";
    httpGet(100, captured);
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

function listen() {
  document.getElementById("top").classList.add("outline");
  document.getElementById("delayed").classList.add("outline");
  speechRecognition.start();
  speechRecognition.onresult = handleResult;
  speechRecognition.onspeechend = function() {
    speechRecognition.stop();
    document.getElementById("delayed").classList.remove("outline");
    document.getElementById("top").classList.remove("outline");
  }
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    listen();
  }
});

document.addEventListener('click', () => {
  listen();
});