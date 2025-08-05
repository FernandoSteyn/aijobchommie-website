#!/bin/bash
set -e

echo "🚀 Starting Netlify build script for AI Job Chommie"

# Change to the correct directory (root, not frontend)
cd ..

echo "📍 Current directory: $(pwd)"
echo "📁 Directory contents:"
ls -la

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found! Looking for it..."
    find . -name "package.json" -type f
    exit 1
fi

echo "✅ Found package.json"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --force

# Build the application
echo "🏗️ Building the application..."
npm run build

# Check if build directory was created
if [ ! -d "build" ]; then
    echo "❌ Build directory not found!"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build directory contents:"
ls -la build/

# Move build contents to where Netlify expects them (frontend/build)
echo "📂 Setting up frontend/build directory for Netlify..."
mkdir -p frontend/build
cp -r build/* frontend/build/

echo "🎉 Netlify build script completed successfully!" 