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

## Lancer le RRFVoice automatiquement

Si vous souhaitez lancer automatiquement le RRFVoice, à chaque redémarrage du Spotnik, il est simple de le faire depuis le fichier `/etc/rc.local`.

Donc, juste __avant__ la dernière ligne du fichier (qui doit être `exit 0`), il suffit d'ajouter ces 2 lignes :

```
cd /root/RRFVoice
./RRFVoice.sh start
```

Après modification, votre fichier `/etc/rc.local` devrait donc se terminer par :

```
cd /root/RRFVoice
./RRFVoice.sh start
exit 0
```