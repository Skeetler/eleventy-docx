#!/bin/bash
# setup.sh

set -e  # Exit on any error

echo "Setting up PDF generator project..."

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "Node.js required. Install from nodejs.org"
    exit 1
fi

# Install LibreOffice (macOS)
if ! command -v /Applications/LibreOffice.app/Contents/MacOS/soffice &> /dev/null; then
    echo "Installing LibreOffice..."
    brew install --cask libreoffice
fi

# Install npm dependencies
npm install

echo "Setup complete!"
echo "Usage:"
echo "1. Put .docx files in ./input/"
echo "2. Run: npm run pdf"
