@echo off
REM Visual Component Test Runner for Windows
REM Usage: test-component.bat [ComponentName]

IF "%1"=="" (
  echo Usage: test-component.bat [ComponentName]
  echo Examples: test-component.bat AboutSection
  echo           test-component.bat Header
  exit /b 1
)

echo Starting visual test for %1...
start "" http://localhost:3006/?component=%1
npm run test:visual-win

exit /b 0
