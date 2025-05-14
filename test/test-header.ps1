# Test Header Component Script for PowerShell

Write-Host "Preparing to test Header component in isolation..." -ForegroundColor Cyan

# Navigate to project directory
Set-Location "c:\Users\jwpmi\Downloads\React\reactts-nava"

# Create backup of original index.tsx
Write-Host "Creating backup of original index.tsx" -ForegroundColor Yellow
Copy-Item -Path "src\index.tsx" -Destination "src\index.tsx.backup"

# Apply test index file
Write-Host "Applying test index file" -ForegroundColor Yellow
Copy-Item -Path "src\index.tsx.test" -Destination "src\index.tsx" -Force

# Start React app in a new process
Write-Host "Starting React app..." -ForegroundColor Green
$reactProcess = Start-Process -FilePath "npm" -ArgumentList "start" -PassThru

Write-Host ""
Write-Host "Header component test is running." -ForegroundColor Cyan
Write-Host "Press Enter to restore original index.tsx and exit the test mode." -ForegroundColor Cyan
Read-Host

# Stop the React app process
Write-Host "Stopping React app..." -ForegroundColor Yellow
Stop-Process -Id $reactProcess.Id -Force

# Restore original index.tsx
Write-Host "Restoring original index.tsx" -ForegroundColor Yellow
Copy-Item -Path "src\index.tsx.backup" -Destination "src\index.tsx" -Force
Remove-Item -Path "src\index.tsx.backup"

Write-Host "Header test completed." -ForegroundColor Green
