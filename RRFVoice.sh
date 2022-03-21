#!/bin/bash
case "$1" in
    start)
        nohup node RRFVoiceServer.js &
        nohup node RRFVoiceClient.js &
        ;;
    stop)
        search="node RRFVoice"
        pkill -f "${search}"
        ;;
esac