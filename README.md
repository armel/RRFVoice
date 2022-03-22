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

### Lancement

Placez vous dans le répertoire `RRFVoice` :

```
cd /root/RRFVoice
```

Exécutez la commande : 

```
./RRFVoice.sh start
```

Vous pourrez arréter RRFVoice avec la commande


```
./RRFVoice.sh stop
```

## Utilisation

Depuis un navigateur Chrome (ou Chromium), allez sur :

`https://adresse_ip_de_votre_spotnik:4443/`

Pensez au [_thisisunsafe_](https://dblazeski.medium.com/chrome-bypass-net-err-cert-invalid-for-development-daefae43eb12) afin de contourner la limitation du certificat auto signé, si nécessaire.

Pour lancer une commande, cliquez sur le microphone. 

> Attention, votre navigateur va vous demander l'authorization d'utiliser le microphone de votre PC. C'est une procédure normale. Vous devez l'accepter.

Vous n'avez plus qu'à parler en disant à haute voix, par exemple, _salon local_. Et votre Spotnik fera QSY sur le salon local !

> Vous devez cliquer sur le microphone à chaque nouvelle commande.

## Commandes reconnues

Pour le moment, le RRFVoice reconnait les commandes pour faire les QSY sur les salons du RRF, manipuler le RRFRaptor ou faire un scan rapide, redémarrer ou stopper son Spotnik, obtenir la météo, etc. 

Notez qu'il est simple d'enrichir le dictionnaire des actions, si besoin.

