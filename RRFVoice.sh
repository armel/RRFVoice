#!/bin/bash
SERVER_SCRIPT='RRFVoiceServer.js'
CLIENT_SCRIPT='RRFVoiceServer.js'


case "$1" in
    start)
        nohup node RRFVoiceServer.js &
        nohup node RRFVoiceClient.js &
        ;;
    stop)
        search="node ${SERVER_SCRIPT}"
        pkill -f "${search}"
        search="node ${CLIENT_SCRIPT}"
        pkill -f "${search}"
        ;;
esac