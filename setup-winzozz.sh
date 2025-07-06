# Check Node.js
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js required. Install from nodejs.org"
    exit 1
}

# Install LibreOffice via winget
if (!(Test-Path "C:\Program Files\LibreOffice\program\soffice.exe")) {
    Write-Host "Installing LibreOffice..."
    winget install --id TheDocumentFoundation.LibreOffice
}

# Install npm dependencies
npm install

Write-Host "Setup complete!"
