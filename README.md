# 🦞 OpenClaw Unhackathon – Asunción 2026

**Event**: OpenClaw Global Unhackathon  
**Location**: Asunción, Paraguay  
**Date**: Saturday, February 28, 2026 • 1:00 PM – 6:00 PM (GMT-3)  
**Capacity**: 200 builders globally, 27 cities synchronized  

---

## 📋 PROJECT OVERVIEW

This repository contains everything you need to **prepare for and ship a working project** at the OpenClaw Unhackathon.

### Your Mission (Choose One)

#### **PRIMARY: Slack-to-GitHub Integration** ⭐ RECOMMENDED

A 3-hour OpenClaw agent that:
- Monitors a Slack channel for bug reports
- Parses natural language ("Login page crashes on mobile")
- Creates GitHub issues automatically
- Posts confirmation back to Slack with issue link

**Why this project**:
- ✅ Composio sponsor will be watching (potential jobs/funding)
- ✅ Solves real problem (dev teams love automation)
- ✅ Achievable in 3h 45min
- ✅ Impressive to non-technical people
- ✅ Relevant to Paraguay startup ecosystem

**Tech Stack**:
- **OpenClaw**: Agent runtime
- **Composio MCP**: GitHub + Slack API connectors
- **Claude 3.5 Sonnet**: LLM for decision-making
- **Node.js**: Custom skill implementation

---

## 🚀 QUICK START

### Prerequisites

- Node.js 18+ (`node --version`)
- npm 9+ (`npm --version`)
- GitHub account + personal access token
- Slack workspace (for testing)
- Anthropic API key (for Claude)

### 1-Minute Setup

```bash
# Clone this repo
git clone https://github.com/YOUR_USERNAME/openclaw-unhackathon-asuncion.git
cd openclaw-unhackathon-asuncion

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your keys
nano .env
# Add: ANTHROPIC_API_KEY=sk-ant-...
# Add: GITHUB_TOKEN=ghp_...
# Add: SLACK_BOT_TOKEN=xoxb-...

# Start OpenClaw
npm start

# In another terminal, test the agent
npm run test:agent
```

**Expected output**: Agent responds with acknowledgment

---

## 📚 DOCUMENTATION

### For Your Situation

| Need | File | Time |
|------|------|------|
| **Getting started** | [`SETUP.md`](./docs/SETUP.md) | 15 min |
| **Understanding architecture** | [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | 30 min |
| **Building the integration** | [`BUILD.md`](./docs/BUILD.md) | 2h 30min |
| **Testing & debugging** | [`DEBUGGING.md`](./docs/DEBUGGING.md) | As needed |
| **Event day strategy** | [`EVENT_DAY.md`](./docs/EVENT_DAY.md) | 10 min |
| **Composio reference** | [`docs/COMPOSIO.md`](./docs/COMPOSIO.md) | 20 min |
| **MCP explainer** | [`docs/MCP.md`](./docs/MCP.md) | 15 min |

---

## 📁 REPOSITORY STRUCTURE

```
openclaw-unhackathon-asuncion/
├── README.md                          # You are here
├── SETUP.md                           # Installation guide
├── package.json                       # Node dependencies
├── .env.example                       # Template for secrets
├── .gitignore                         # Don't commit secrets!
│
├── docs/
│   ├── ARCHITECTURE.md                # Technical design
│   ├── BUILD.md                       # Step-by-step build guide
│   ├── DEBUGGING.md                   # Troubleshooting
│   ├── EVENT_DAY.md                   # Feb 28 strategy
│   ├── COMPOSIO.md                    # Composio API reference
│   ├── MCP.md                         # MCP protocol explainer
│   └── CONCEPTS.md                    # Core mental models
│
├── src/
│   ├── agent.js                       # Main agent setup
│   ├── skills/
│   │   ├── parse-slack-message.js     # Parse bug reports
│   │   └── format-github-issue.js     # Convert to GitHub issue
│   ├── mcp/
│   │   └── composio-server.js         # Composio connector
│   └── utils/
│       ├── logger.js                  # Logging utility
│       └── error-handler.js           # Error recovery
│
├── config/
│   ├── openclaw.config.json           # OpenClaw settings
│   ├── composio.config.json           # Composio settings
│   └── llm.config.json                # LLM settings (Claude)
│
├── tests/
│   ├── unit/
│   │   └── skills.test.js             # Test skills
│   ├── integration/
│   │   └── composio.test.js           # Test MCP integration
│   └── e2e/
│       └── slack-to-github.test.js    # Full flow test
│
├── scripts/
│   ├── setup.sh                       # First-time setup
│   ├── start.sh                       # Start OpenClaw
│   ├── test.sh                        # Run all tests
│   └── demo.sh                        # Run demo scenario
│
├── SOUL.md                            # Agent personality
├── IDENTITY.md                        # Agent purpose & constraints
├── MEMORY.md                          # Persistent facts
├── HEARTBEAT.md                       # Scheduled tasks
│
└── demos/
    ├── slack-to-github.md             # Demo walkthrough
    └── screenshots/                   # Demo screenshots
```

---

## 🎯 WHAT'S INCLUDED

### ✅ Ready-to-Use Code

- [ ] Complete OpenClaw agent scaffold
- [ ] Two example skills (parse, format)
- [ ] Composio MCP server connector
- [ ] Environment variable setup
- [ ] Error handling + logging
- [ ] Unit + integration tests

### ✅ Documentation

- [ ] Step-by-step build guide
- [ ] Architecture diagrams (ASCII)
- [ ] Debugging troubleshooting
- [ ] API reference (Composio, MCP)
- [ ] Concepts explainer
- [ ] Event day strategy

### ✅ Configuration Files

- [ ] `.env.example` (customize with your keys)
- [ ] `openclaw.config.json` (agent settings)
- [ ] `composio.config.json` (API integrations)
- [ ] `package.json` (dependencies)

### ✅ Testing Infrastructure

- [ ] Unit tests for skills
- [ ] Integration tests for Composio
- [ ] End-to-end test (Slack → GitHub)
- [ ] Demo scenario walkthrough

---

## 🛠️ GETTING STARTED (Today)

### Step 1: Clone & Install (5 min)

```bash
git clone https://github.com/YOUR_USERNAME/openclaw-unhackathon-asuncion.git
cd openclaw-unhackathon-asuncion
npm install
```

### Step 2: Configure (10 min)

```bash
cp .env.example .env
# Edit .env and add your API keys
# ANTHROPIC_API_KEY=sk-ant-...
# GITHUB_TOKEN=ghp_...
# SLACK_BOT_TOKEN=xoxb-...
```

See [`SETUP.md`](./SETUP.md) for detailed key setup.

### Step 3: Run Setup Script (5 min)

```bash
bash scripts/setup.sh
# This will:
# - Install dependencies
# - Validate API keys
# - Create OpenClaw directories
# - Test basic connectivity
```

### Step 4: Read Architecture (30 min)

Open [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) and understand:
- How OpenClaw Gateway works
- How Composio MCP integrates
- How skills get invoked
- Where the magic happens

### Step 5: Start Building (Follow [`docs/BUILD.md`](./docs/BUILD.md))

---

## 📅 PREPARATION TIMELINE

### By Feb 24 (Monday)
- [ ] Clone this repo
- [ ] Run `npm install`
- [ ] Configure `.env` with your API keys
- [ ] Run `npm start` and see OpenClaw start
- [ ] Understand the directory structure

### By Feb 25 (Tuesday)
- [ ] Read `ARCHITECTURE.md`
- [ ] Read `COMPOSIO.md`
- [ ] Run the first example skill manually
- [ ] Test Composio connection with dummy GitHub API call

### By Feb 26 (Wednesday)
- [ ] Complete Step 1 of `BUILD.md` (Slack parser skill)
- [ ] Complete Step 2 (GitHub formatter skill)
- [ ] Push progress to GitHub: `git push origin main`
- [ ] Test both skills independently

### By Feb 27 (Thursday)
- [ ] Complete Step 3 of `BUILD.md` (Composio integration)
- [ ] Test Slack → GitHub flow locally
- [ ] Run full end-to-end test: `npm run test:e2e`
- [ ] Document any issues in `DEBUGGING.md`

### By Feb 28 (Friday Morning)
- [ ] Verify OpenClaw runs on your laptop
- [ ] Test all API keys work
- [ ] Have 2 backup ideas written down
- [ ] Arrive 10 min early to venue

---

## 🚀 ON EVENT DAY (Feb 28)

### Before Leaving Home (12:15 PM)

```bash
# Final checks
npm start                    # OpenClaw runs?
npm run test:e2e            # Full flow works?
npm run test:skills         # Skills pass tests?
git status                  # All code committed?

# If all pass, you're ready!
```

### Team Assignment (1:00-1:15 PM)

- Share this repo link with your teammates
- They clone it: `git clone https://github.com/[YOUR_REPO]`
- Everyone `npm install`
- **Assign roles**:
  - Person A: Skills development (parse, format)
  - Person B: Composio integration
  - Person C: Testing & debugging
  - You: Orchestration & demo

### Build (1:15-5:00 PM)

Follow [`EVENT_DAY.md`](./docs/EVENT_DAY.md) for hourly checkpoints

### Demo (5:30-6:00 PM)

```
Setup: "I'm going to post a bug in Slack"
Demo: [Post in Slack] → [Check GitHub] → [Check Slack confirmation]
Code: Show the 3 key files that make it work
Close: "Not perfect, but it ships"
```

---

## 💻 RUNNING THE PROJECT

### Start OpenClaw

```bash
npm start
# Logs should show:
# ✓ Gateway initialized on port 3000
# ✓ Agent 'main' loaded
# ✓ Composio MCP connected
```

### Run Tests

```bash
# All tests
npm test

# Only unit tests
npm run test:unit

# Only integration tests
npm run test:integration

# Only e2e test
npm run test:e2e

# With coverage
npm run test:coverage
```

### Test Individual Skills

```bash
# Test the Slack message parser
node src/skills/parse-slack-message.js --test

# Test the GitHub formatter
node src/skills/format-github-issue.js --test

# Test Composio connection
node src/mcp/composio-server.js --test
```

### Run Demo Scenario

```bash
# Runs a pre-scripted scenario: Slack message → GitHub issue
bash scripts/demo.sh

# Expected: Issue created in GitHub, confirmation in Slack
```

---

## 🔑 API KEYS NEEDED

### 1. Anthropic (Claude)

```bash
# Get from: https://console.anthropic.com/
ANTHROPIC_API_KEY="sk-ant-..."
```

### 2. GitHub

```bash
# Get from: https://github.com/settings/tokens
# Permissions needed: repo (full control of private repos)
GITHUB_TOKEN="ghp_..."
```

### 3. Slack

```bash
# Get from: https://api.slack.com/apps
# Create a bot, get the token
SLACK_BOT_TOKEN="xoxb-..."

# Also get:
SLACK_SIGNING_SECRET="xxx..."
```

### 4. Composio (Optional, if Using)

```bash
# Get from: https://app.composio.dev
COMPOSIO_API_KEY="..."
```

**See [`SETUP.md`](./SETUP.md) for detailed instructions**

---

## 📖 CORE CONCEPTS (Quick Refresh)

### OpenClaw is Not ChatGPT
- Runs locally (not cloud)
- Persistent (remembers context)
- Proactive (works 24/7)
- Multi-channel (50+ integrations)

### The Agent Loop
```
1. Load SOUL.md (personality) + IDENTITY.md (purpose) + MEMORY.md (facts)
2. Build system prompt
3. Call LLM (Claude) with available tools
4. Execute tools in parallel
5. Call LLM again with results
6. Update persistent state
7. Send response to user
```

### Composio = API Connectors
```
Composio wraps GitHub, Slack, Notion, etc APIs
OpenClaw calls Composio tools
Tools handle: OAuth, rate limiting, error recovery
```

### MCP = Tool Standard
```
MCP = Model Context Protocol
Resources = context data (read-only)
Tools = actions (executable)
OpenClaw uses both
```

**Full explainers in [`docs/CONCEPTS.md`](./docs/CONCEPTS.md)**

---

## 🐛 TROUBLESHOOTING

### OpenClaw Won't Start

```bash
# Check Node version
node --version    # Should be 18+

# Check port isn't taken
lsof -i :3000    # If something is there, kill it

# Reinstall dependencies
rm -rf node_modules
npm install

# Check logs
tail -f logs/openclaw.log
```

### API Key Issues

```bash
# Verify key is in environment
echo $ANTHROPIC_API_KEY    # Should print your key

# If empty, export it:
export ANTHROPIC_API_KEY="sk-ant-..."

# Verify key is valid
curl https://api.anthropic.com/v1/models \
  -H "x-api-key: $ANTHROPIC_API_KEY"
```

### Composio Not Connecting

```bash
# Test Composio connectivity
node src/mcp/composio-server.js --test

# Check Composio credentials
echo $COMPOSIO_API_KEY

# Verify GitHub token has correct permissions
```

**Full debugging guide in [`docs/DEBUGGING.md`](./docs/DEBUGGING.md)**

---

## 📊 PROJECT STATUS

- [ ] Code scaffolding (100%)
- [ ] Documentation (100%)
- [ ] Example skills (100%)
- [ ] Composio integration (80%)
- [ ] Tests (70%)
- [ ] Demo scenario (90%)

**You're ready to build!**

---

## 🤝 TEAM COLLABORATION

### Git Workflow

```bash
# Create a branch for your feature
git checkout -b feature/slack-parser

# Make changes
# Test locally
npm test

# Commit with clear message
git commit -m "feat: Add Slack message parser skill"

# Push to your fork
git push origin feature/slack-parser

# On GitHub, create a pull request
# Link teammates for review
```

### Communication

- **Slack**: Use team Slack channel
- **Discord**: OpenClaw community Discord
- **This repo**: Issues & PRs for async discussion

---

## 📞 GETTING HELP

### Before the Event

1. **Check docs first**: 90% of questions answered in [`docs/`](./docs/)
2. **Search existing issues**: Maybe someone hit the same problem
3. **Create an issue**: Include error message, code, what you tried
4. **Email organizers**: AI Tinkerers Asunción

### During the Event

1. **Ask your teammates**: They're there to help
2. **Ask neighbors**: People around you want to help
3. **Ask organizers**: They'll debug with you
4. **Use backups**: Have a Plan B ready

---

## 🎁 BONUS: What's Next After the Event

### Portfolio
- Add this to your GitHub portfolio
- Write a blog post: "How I built X at the Unhackathon"
- Share on LinkedIn (tag AI Tinkerers)

### Network
- Connect with teammates on LinkedIn
- Follow Composio/CopilotKit/Auth0 (sponsors)
- Join OpenClaw Discord community
- Apply for jobs (sponsors are hiring)

### Learning
- Contribute to OpenClaw (open source)
- Build another agent project
- Read MCP spec deeper
- Study multi-agent patterns

---

## 📄 LICENSE

MIT License - Use this code however you want

---

## 👥 CONTRIBUTORS

- **You**: Main builder
- **Teammates**: TBD (Feb 28)
- **Inspired by**: OpenClaw, AI Tinkerers, Composio

---

## 🔗 QUICK LINKS

- **Event**: https://asuncion.aitinkerers.org/p/openclaw-unhackathon-asuncion
- **OpenClaw Docs**: https://docs.openclaw.ai
- **Composio Docs**: https://composio.dev/docs
- **MCP Spec**: https://modelcontextprotocol.io
- **Claude API**: https://console.anthropic.com/

---

## 📝 FINAL NOTES

- **Start small**: Get one skill working first
- **Test often**: Every 30 minutes
- **Commit often**: Every feature
- **Ask for help**: Don't debug alone for >10 min
- **Ship something**: Imperfect > not finished
- **Have fun**: This is a learning experience

---

**You've got this. Let's build something cool on Feb 28.** 🦞

Last updated: Feb 20, 2026
