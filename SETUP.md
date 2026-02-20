# 🔧 SETUP GUIDE - Get Everything Running

Complete this guide by **Feb 26** to be ready for the event.

---

## Prerequisites

**Check you have**:
- Node.js 18+ (check: `node --version`)
- npm 9+ (check: `npm --version`)
- A code editor (VS Code recommended)
- Git installed
- GitHub account
- At least 30 min of time

---

## Step 1: Clone This Repository (5 min)

```bash
# Open terminal and navigate where you want the project
cd ~/projects

# Clone the repo
git clone https://github.com/YOUR_USERNAME/openclaw-unhackathon-asuncion.git
cd openclaw-unhackathon-asuncion

# Verify it cloned
ls -la
# Should show: README.md, package.json, src/, docs/, etc.
```

---

## Step 2: Install Dependencies (3 min)

```bash
# Install all npm packages
npm install

# Verify installation
npm list

# Should show: 
# openclaw-unhackathon-asuncion@1.0.0
# ├── @composio/sdk@...
# ├── @modelcontextprotocol/sdk@...
# ├── ...
```

**If npm install fails**:
```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## Step 3: Get Your API Keys (30 min)

You need 3 keys: Anthropic, GitHub, Slack (optional Composio)

### Key #1: Anthropic (Claude API)

1. Go to: https://console.anthropic.com/
2. Sign up or log in
3. Click "API Keys" in left sidebar
4. Click "Create Key"
5. Copy the key (starts with `sk-ant-`)
6. **Never share this key**

```bash
# Test it works
curl https://api.anthropic.com/v1/models \
  -H "x-api-key: sk-ant-YOUR_KEY_HERE"

# Should return JSON with list of models (no error)
```

### Key #2: GitHub Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Set name: `OpenClaw Unhackathon`
4. Check scopes:
   - ✅ `repo` (full control of private repos)
   - ✅ `workflow` (allow Actions to run)
5. Click "Generate token"
6. Copy the token (starts with `ghp_`)
7. **Save this immediately** (GitHub won't show it again)

```bash
# Test it works
curl https://api.github.com/user \
  -H "Authorization: token ghp_YOUR_TOKEN_HERE"

# Should return JSON with your GitHub user info
```

### Key #3: Slack Bot Token (Optional, for Testing)

1. Go to: https://api.slack.com/apps
2. Click "Create New App" → "From scratch"
3. App name: `OpenClaw Agent`
4. Pick your workspace (create one if needed)
5. Go to "OAuth & Permissions" in left sidebar
6. Under "Scopes", add these Bot Token Scopes:
   - `chat:write`
   - `channels:read`
   - `messages:read`
7. Scroll to "OAuth Tokens for Your Workspace"
8. Click "Install to Workspace"
9. Copy the "Bot User OAuth Token" (starts with `xoxb-`)

```bash
# Test it works
curl -X POST https://slack.com/api/auth.test \
  -H "Authorization: Bearer xoxb_YOUR_TOKEN_HERE"

# Should return JSON with ok: true
```

### Key #4: Composio (Optional, for Full Integration)

1. Go to: https://app.composio.dev
2. Sign up or log in
3. Click "API Keys" or "Settings"
4. Create new key
5. Copy the key

---

## Step 4: Create `.env` File (5 min)

```bash
# Copy the template
cp .env.example .env

# Open it in your editor
nano .env
# or
code .env
```

**Fill in your keys**:

```bash
# Anthropic (Required)
ANTHROPIC_API_KEY=sk-ant-YOUR_KEY_HERE

# GitHub (Required)
GITHUB_TOKEN=ghp_YOUR_TOKEN_HERE
GITHUB_OWNER=YOUR_GITHUB_USERNAME
GITHUB_REPO=YOUR_REPO_NAME

# Slack (Optional for testing)
SLACK_BOT_TOKEN=xoxb_YOUR_TOKEN_HERE
SLACK_SIGNING_SECRET=xxx_YOUR_SECRET_HERE

# Composio (Optional)
COMPOSIO_API_KEY=YOUR_KEY_HERE

# OpenClaw Settings
OPENCLAW_PORT=3000
LOG_LEVEL=debug
NODE_ENV=development
```

**Save the file** (Ctrl+S or Cmd+S)

**CRITICAL**: Never commit `.env` to GitHub!
```bash
# .env is in .gitignore, so it won't be committed
# Verify:
cat .gitignore | grep .env
# Should show: .env
```

---

## Step 5: Verify Setup (5 min)

```bash
# Run the setup script
bash scripts/setup.sh

# This will:
# ✓ Check Node version
# ✓ Check npm version
# ✓ Validate .env file exists
# ✓ Test API key connectivity
# ✓ Create necessary directories
# ✓ Show final status
```

**Expected output**:
```
✓ Node.js version: v18.x.x
✓ npm version: 9.x.x
✓ .env file exists
✓ Checking Anthropic API key...
✓ Anthropic API key is valid
✓ Checking GitHub token...
✓ GitHub token is valid
✓ All checks passed!
```

**If checks fail**:
- Make sure all keys are in `.env`
- Make sure `.env` has no spaces around `=` (e.g., `KEY=VALUE` not `KEY = VALUE`)
- Make sure keys are valid (test them individually with curl above)

---

## Step 6: Start OpenClaw (5 min)

```bash
# Start the OpenClaw agent
npm start

# Should see output like:
# [info] OpenClaw Gateway initialized
# [info] Listening on port 3000
# [info] Agent 'main' loaded from ./agents/main
# [info] SOUL.md loaded (489 bytes)
# [info] IDENTITY.md loaded (234 bytes)
# [info] MEMORY.md loaded (156 bytes)
```

**In another terminal**, test it works:

```bash
# Open a new terminal in the same directory
# Test the API
curl -X POST http://localhost:3000/v1/responses \
  -H "Content-Type: application/json" \
  -d '{"model": "openclaw:main", "messages": [{"role": "user", "content": "Hello"}]}'

# Should return JSON response from the agent
```

**If it hangs or times out**:
1. Check your API key is valid
2. Check internet connection
3. Check OpenClaw is still running in other terminal
4. See `docs/DEBUGGING.md` for more help

---

## Step 7: Run Tests (5 min)

```bash
# Run all tests
npm test

# Should show:
# ✓ Skills load correctly
# ✓ Parse Slack message test passes
# ✓ Format GitHub issue test passes
# ✓ All tests passed (3 passed in 200ms)
```

**If tests fail**:
- Check `.env` is configured
- Check OpenClaw is running
- See `docs/DEBUGGING.md`

---

## Step 8: Understand the Structure (10 min)

Open this directory structure in your editor:

```
openclaw-unhackathon-asuncion/
├── README.md                      ← Main documentation (you read this)
├── SETUP.md                       ← This file
├── package.json                   ← Dependencies
├── .env                           ← Your secrets (DON'T COMMIT)
├── .env.example                   ← Template (safe to commit)
│
├── src/
│   ├── agent.js                   ← Main agent setup
│   ├── skills/                    ← Custom skills
│   │   ├── parse-slack-message.js
│   │   └── format-github-issue.js
│   └── mcp/                       ← MCP servers
│       └── composio-server.js
│
├── docs/
│   ├── ARCHITECTURE.md            ← How everything works
│   ├── BUILD.md                   ← Step-by-step build guide
│   └── DEBUGGING.md               ← Troubleshooting
│
├── config/
│   ├── openclaw.config.json       ← OpenClaw settings
│   └── composio.config.json       ← Composio settings
│
├── SOUL.md                        ← Agent personality
├── IDENTITY.md                    ← Agent purpose
└── MEMORY.md                      ← Agent memory
```

**Key files to understand**:
1. `src/agent.js` - The main entry point
2. `src/skills/parse-slack-message.js` - Your first skill
3. `src/mcp/composio-server.js` - Integration with Composio
4. `docs/ARCHITECTURE.md` - How it all fits together

---

## Step 9: Read Core Documentation (30 min)

Read in this order:

1. **`docs/ARCHITECTURE.md`** (20 min)
   - Understand how OpenClaw works
   - Understand how skills get invoked
   - Understand how Composio integrates

2. **`docs/COMPOSIO.md`** (10 min)
   - How to use Composio tools
   - GitHub + Slack API reference
   - Examples of tool calls

---

## Step 10: Make Your First Commit (5 min)

```bash
# See what changed
git status

# Should show:
# Changes not staged for commit:
#   modified: .env (not shown because in .gitignore)
#   new file: src/...

# Add all changes (except .env)
git add -A

# Verify .env is NOT included
git status | grep .env
# Should be empty (not shown)

# Create first commit
git commit -m "feat: Initial OpenClaw setup with Composio integration"

# Push to GitHub
git push origin main

# Verify on GitHub
# Go to https://github.com/YOUR_USERNAME/YOUR_REPO
# Should see your files
```

---

## Verification Checklist

- [ ] Node 18+ installed
- [ ] npm 9+ installed
- [ ] Repository cloned
- [ ] `npm install` successful
- [ ] All 4 API keys obtained and tested
- [ ] `.env` file created with all keys
- [ ] `bash scripts/setup.sh` passes
- [ ] `npm start` works
- [ ] `npm test` passes all tests
- [ ] Pushed initial commit to GitHub
- [ ] Understand the 5 key directories above

---

## You're Ready!

If you completed all steps ✅, you're **fully prepared** for the event.

**Next step**: Read [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) to understand how everything works.

---

## Troubleshooting

### "npm install" fails
```bash
# Clear and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### "EACCES: permission denied"
```bash
# Don't use sudo. Instead:
npm install --prefix ~/projects/openclaw-unhackathon-asuncion
```

### "Port 3000 already in use"
```bash
# Use a different port
PORT=3001 npm start

# Or kill the process using port 3000
lsof -i :3000      # Find process ID
kill -9 <PID>      # Kill it
```

### "API key invalid"
```bash
# Verify key is in .env
cat .env | grep ANTHROPIC_API_KEY

# Verify it's exported
export $(cat .env | xargs)
echo $ANTHROPIC_API_KEY

# Test manually
curl https://api.anthropic.com/v1/models \
  -H "x-api-key: $ANTHROPIC_API_KEY"
```

### Still stuck?
1. Check `docs/DEBUGGING.md`
2. Create an issue on GitHub
3. Email: asuncion@aitinkerers.org

---

**You're all set! See you Feb 28.** 🦞
