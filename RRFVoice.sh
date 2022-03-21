#!/bin/bash
case "$1" in
    start)
        nohup node RRFVoiceServer.js &>/dev/null
        nohup node RRFVoiceClient.js &>/dev/null
        ;;
    stop)
        search="node RRFVoice"
        pkill -f "${search}"
        ;;
esac