# ⚡ QUICK START – 5 Minutes to Running

Complete this **today** to verify everything works.

---

## The 5-Minute Checklist

### Minute 1: Get the Code

```bash
# Copy all files from /tmp/openclaw-unhackathon-asuncion to your computer
# Or use git to clone (once you push to GitHub)
```

### Minute 2: Install Dependencies

```bash
# Navigate to the project
cd openclaw-unhackathon-asuncion

# Install npm packages
npm install

# Should take 1-2 minutes
```

### Minute 3: Configure

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your API keys
nano .env
# or
code .env

# Add these (from SETUP.md):
ANTHROPIC_API_KEY=sk-ant-YOUR_KEY
GITHUB_TOKEN=ghp_YOUR_KEY
SLACK_BOT_TOKEN=xoxb_YOUR_KEY
```

### Minute 4: Verify

```bash
# Start the agent
npm start

# Expected output:
# [timestamp] [agent] INFO: 🦞 Starting OpenClaw Agent
# [timestamp] [gateway] INFO: Gateway listening on port 3000
# (Leave this running)
```

### Minute 5: Test

**In a NEW terminal**:

```bash
# Test the API
curl -X POST http://localhost:3000/v1/responses \
  -H "Content-Type: application/json" \
  -d '{"model": "openclaw:main", "messages": [{"role": "user", "content": "Bug: test"}]}'

# Expected output: JSON response from agent
```

**If you see a JSON response**: ✅ You're done!

**If you see an error**: Check SETUP.md → Troubleshooting

---

## What Just Happened

1. **npm install**: Downloaded dependencies
2. **npm start**: Started the HTTP Gateway
3. **curl**: Sent a test message
4. **Agent**: Parsed message, formatted it, returned confirmation

---

## You're Ready!

Next: Read [`SETUP.md`](./SETUP.md) for full configuration

---

## Common Issues (30 sec fixes)

```bash
# Port 3000 already in use?
PORT=3001 npm start

# npm install failed?
npm cache clean --force && npm install

# API key invalid?
# Go to SETUP.md → Get Your API Keys
# Verify each key individually

# Still stuck?
# Check docs/DEBUGGING.md
```

---

**That's it! You're ready for the event.** 🦞
