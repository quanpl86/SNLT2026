#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=================================================="
echo "🚀 STARTING SNLT REVIEW STUDIO"
echo "=================================================="

# Start server in background or foreground
node server.js &
SERVER_PID=$!

sleep 1

# Open browser
open "http://localhost:5173"

echo "Review Studio running on http://localhost:5173"
echo "Press Ctrl+C to stop the server."

wait $SERVER_PID
