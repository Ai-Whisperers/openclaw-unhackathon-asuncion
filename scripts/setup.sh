#!/bin/bash

echo "🦞 OpenClaw Unhackathon - Setup Script"
echo "======================================"
echo ""

echo "1️⃣  Checking Node.js..."
if ! command -v node &> /dev/null; then
  echo "❌ Node.js not found. Please install from https://nodejs.org/"
  exit 1
fi
NODE_VERSION=$(node --version)
echo "✓ Node $NODE_VERSION"

echo ""
echo "2️⃣  Checking npm..."
if ! command -v npm &> /dev/null; then
  echo "❌ npm not found"
  exit 1
fi
NPM_VERSION=$(npm --version)
echo "✓ npm $NPM_VERSION"

echo ""
echo "3️⃣  Checking .env file..."
if [ ! -f .env ]; then
  echo "❌ .env file not found. Run: cp .env.example .env"
  exit 1
fi
echo "✓ .env exists"

echo ""
echo "4️⃣  Checking required environment variables..."
REQUIRED=("ANTHROPIC_API_KEY" "GITHUB_TOKEN" "SLACK_BOT_TOKEN")
MISSING=()

for var in "${REQUIRED[@]}"; do
  if [ -z "${!var}" ]; then
    MISSING+=("$var")
  fi
done

if [ ${#MISSING[@]} -gt 0 ]; then
  echo "⚠️  Missing variables (but that's OK for testing):"
  for var in "${MISSING[@]}"; do
    echo "   - $var"
  done
else
  echo "✓ All required variables set"
fi

echo ""
echo "5️⃣  Checking dependencies..."
if [ ! -d node_modules ]; then
  echo "Installing npm packages..."
  npm install
fi
echo "✓ Dependencies installed"

echo ""
echo "6️⃣  Creating directories..."
mkdir -p logs agents/main
echo "✓ Directories created"

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env with your API keys"
echo "2. Run: npm start"
echo "3. In another terminal: npm run test:e2e"
echo ""
