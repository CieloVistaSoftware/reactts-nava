#!/bin/bash
# Visual Component Test Runner for Mac/Linux
# Usage: ./test-component.sh [ComponentName]

if [ -z "$1" ]; then
  echo "Usage: ./test-component.sh [ComponentName]"
  echo "Examples: ./test-component.sh AboutSection"
  echo "          ./test-component.sh Header"
  exit 1
fi

echo "Starting visual test for $1..."
open "http://localhost:3006/?component=$1"
npm run test:visual

exit 0
