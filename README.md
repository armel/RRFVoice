# RRFVoice

Le projet RRFVoice permet de piloter son Spotnik par le biais de commandes vocale.

## Installation

### Recupération du projet

Sur votre Spotnik, placez vous dans le répertoire `root` et cloner le projet RRFVoice :

```
cd /root
git clone https://github.com/armel/RRFVoice.git
```

Vous pouvez aussi récuppérer une archive zip, avec l'ensemble du projet, si vous n'avez pas git.


openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem -config ssl.cnf -sha256

### Lancement

Placez vous dans le répertoire `RRFVoice` :

```
cd /root/RRFVoice
```

Lancer le script `RRFRemote.js`  via la commande : 

```
nohup node RRFRemote.js &
```

Lancer le script `RRFVoice.js`  via la commande : 

```
nohup node RRFVoice.js &
```

## Utilisation

Depuis un navigateur Chrome (ou Chromium), allez sur `http://adresse_ip_de_votre_spotnik:4443/`. Pour lancer une commande, cliquez sur le microphone. 

> Attention, votre navigateur va vous demander l'authorization d'utiliser le microphone de votre PC. Vous devez accepter !!!

Vous n'avez plus qu'à parler en disant à haute voix, par exemple, _salon local_. Et votre Spotnik fera QSY sur le salon local !

> Vous devez cliquer sur le microphone à chaque nouvelle commande.

## Note

Note pour moi-même concernant les certificats : https://timonweb.com/django/https-django-development-server-ssl-certificate/
