# Visual Component Test Runner for PowerShell
# Usage: .\test-component.ps1 [ComponentName]

param(
    [Parameter(Mandatory=$true)]
    [string]$ComponentName
)

Write-Host "Starting visual test for $ComponentName..."
Start-Process "http://localhost:3006/?component=$ComponentName"
npm run test:visual-win

exit 0
