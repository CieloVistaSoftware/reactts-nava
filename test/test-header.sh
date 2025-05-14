#!/bin/bash

echo "Preparing to test Header component in isolation..."

cd "c:\Users\jwpmi\Downloads\React\reactts-nava"

echo "Creating backup of original index.tsx"
cp src/index.tsx src/index.tsx.backup

echo "Applying test index file"
cp src/index.tsx.test src/index.tsx

echo "Starting React app..."
npm start &
APP_PID=$!

echo ""
echo "Header component test is running."
echo "Press Enter to restore original index.tsx and exit the test mode."
read

echo "Stopping React app..."
kill $APP_PID

echo "Restoring original index.tsx"
cp src/index.tsx.backup src/index.tsx
rm src/index.tsx.backup

echo "Header test completed."
