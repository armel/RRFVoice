#!/bin/bash
case "$1" in
    start)
        nohup node RRFVoiceServer.js & > /dev/null 2>&1
        nohup node RRFVoiceClient.js & > /dev/null 2>&1
        ;;
    stop)
        search="node RRFVoice"
        pkill -f "${search}"
        ;;
esac