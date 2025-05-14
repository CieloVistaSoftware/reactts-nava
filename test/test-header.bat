@echo off
echo Preparing to test Header component in isolation...

cd c:\Users\jwpmi\Downloads\React\reactts-nava

echo Creating backup of original index.tsx
copy src\index.tsx src\index.tsx.backup

echo Applying test index file
copy src\index.tsx.test src\index.tsx

echo Starting React app...
start "React App" npm start

echo.
echo Header component test is running.
echo Press any key to restore original index.tsx and exit the test mode.
pause > nul

echo Stopping React app...
taskkill /FI "WINDOWTITLE eq React App" /F

echo Restoring original index.tsx
copy src\index.tsx.backup src\index.tsx
del src\index.tsx.backup

echo Header test completed.
