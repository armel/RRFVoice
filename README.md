# RRFVoice

Le projet RRFVoice permet de piloter son Spotnik par le biais de commandes vocale.

## Installation

### Pré-requis

Sur votre machine locale, vous devez disposer de git, node.js, express, etc.
Sur votre Spotnik, vous devez disposer du script RRFRemote.js et veiller à ce qu'il soit lancé. 

Ce script est présent dans les dernières versions de la distribution Spotnik. Vous l'avez également installé si vous utilisez le projet RRFRemote sur plate-forme M5Stack. 


### Recupération du projet

Sur votre machine locale, cloner le projet RRFVoice via la commande git :

``
git clone https://github.com/armel/RRFVoice.git
``

Vous pouvez aussi récuppérer une archive zip, avec l'ensemble du projet, si vous n'avez pas git.

### Paramétrage

Editez le script `voice.js` qui se trouve dans le répertoire `express/assets/js` et indiquez, ligne 3, l'url d'accès à votre `RRFRemote.js`.  

### Lancement

Lancer le script via la commande : 

`node RRFVoice/RRFVoice.js &`

## Utilisation

Depuis un navigateur Chrome (ou Chromium), allez sur `http://localhost:4000/`. Pour lancer une commande, cliquez sur le microphone. 

> Attention, votre navigateur va vous demander l'authorization d'utiliser le microphone de votre PC. Vous devez accepter !!!

Vous n'avez plus qu'à parler en disant à haute voix, par exemple, _salon local_. Et votre Spotnik fera QSY sur le salon local !

> Vous devez cliquer sur le microphone à chaque nouvelle commande.