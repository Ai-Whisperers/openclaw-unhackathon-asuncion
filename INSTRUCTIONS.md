# 📖 COMPLETE INSTRUCTIONS – How to Use This Repository

This repository is **100% ready** for the OpenClaw Unhackathon on Feb 28, 2026.

---

## 📋 What You Have

A complete Slack-to-GitHub integration built with OpenClaw:

```
Slack Message: "Bug: Login crashes on mobile"
        ↓
    [Agent]
        ↓
GitHub Issue: Created automatically
Slack Reply: "Issue #123 created"
```

**Includes:**
- ✅ Core skills (parse, format)
- ✅ Gateway (HTTP server)
- ✅ Composio integration scaffold
- ✅ Complete documentation
- ✅ Test infrastructure
- ✅ Event day strategy

---

## 📚 Documentation Map

Read these in order:

| Document | Purpose | Time | When to Read |
|----------|---------|------|--------------|
| **QUICK_START.md** | Get it running in 5 min | 5 min | Right now |
| **SETUP.md** | Full installation guide | 15 min | Today |
| **ARCHITECTURE.md** | Understand how it works | 30 min | By Feb 25 |
| **BUILD.md** | Step-by-step implementation | 90 min | By Feb 26 |
| **EVENT_DAY.md** | Feb 28 strategy | 10 min | Before 1 PM |

---

## 🚀 Getting Started (Today)

### Step 1: Download This Repository

**Option A: Use Git (Recommended)**

If you have git installed:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/openclaw-unhackathon-asuncion.git
cd openclaw-unhackathon-asuncion

# (If it's not on GitHub yet, see PUSH_TO_GITHUB.md first)
```

**Option B: Download ZIP**

1. Go to: https://github.com/YOUR_USERNAME/openclaw-unhackathon-asuncion
2. Click "Code" → "Download ZIP"
3. Extract the ZIP file
4. Open terminal in the extracted folder

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- OpenClaw framework
- Composio SDK
- Logging utilities
- Testing tools

### Step 3: Configure

```bash
# Copy the template
cp .env.example .env

# Edit with your API keys
nano .env  # or use your editor
```

**Get API keys** (See SETUP.md for details):
- Anthropic: https://console.anthropic.com
- GitHub: https://github.com/settings/tokens
- Slack: https://api.slack.com/apps

### Step 4: Run

```bash
npm start
```

**Expected output**:
```
[timestamp] [agent] INFO: 🦞 Starting OpenClaw Agent
[timestamp] [gateway] INFO: Gateway listening on port 3000
```

### Step 5: Test

**In a new terminal**:

```bash
npm run test:unit

# Should show: ✓ All tests passed
```

---

## 📖 The Repository Structure Explained

```
openclaw-unhackathon-asuncion/
│
├── README.md                       ← Main documentation
├── QUICK_START.md                  ← 5-minute verification
├── SETUP.md                        ← Installation guide
├── INSTRUCTIONS.md                 ← You are here
├── PUSH_TO_GITHUB.md              ← How to push to GitHub
│
├── src/                            ← Source code
│   ├── agent.js                    ← Main agent (entry point)
│   ├── gateway.js                  ← HTTP server
│   ├── skills/                     ← Custom skills
│   │   ├── parse-slack-message.js  ← Parse Slack messages
│   │   ├── format-github-issue.js  ← Format GitHub issues
│   │   └── index.js                ← Skill registry
│   ├── mcp/                        ← MCP servers
│   │   └── composio-server.js      ← Composio integration
│   └── utils/
│       └── logger.js               ← Logging utility
│
├── docs/                           ← Documentation
│   ├── ARCHITECTURE.md             ← How it works
│   ├── BUILD.md                    ← Implementation steps
│   ├── EVENT_DAY.md                ← Feb 28 strategy
│   ├── COMPOSIO.md                 ← Composio reference (coming)
│   └── MCP.md                      ← MCP explainer (coming)
│
├── config/                         ← Configuration
│   └── openclaw.config.json        ← OpenClaw settings
│
├── SOUL.md                         ← Agent personality
├── IDENTITY.md                     ← Agent purpose
├── MEMORY.md                       ← Agent memory
├── HEARTBEAT.md                    ← Scheduled tasks (empty)
│
├── scripts/                        ← Utility scripts
│   └── setup.sh                    ← Setup verification
│
├── tests/                          ← Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── logs/                           ← Log files (created at runtime)
├── .env.example                    ← Environment template
├── .env                            ← Your secrets (git-ignored)
├── .gitignore                      ← What not to commit
└── package.json                    ← Dependencies
```

---

## 🛠️ Common Commands

```bash
# Start the agent
npm start

# Run all tests
npm test

# Run specific tests
npm run test:unit          # Unit tests
npm run test:integration   # Integration tests
npm run test:e2e          # End-to-end test
npm run test:skills       # Skill tests

# Test individual skills
node src/skills/parse-slack-message.js --test
node src/skills/format-github-issue.js --test

# Setup verification
bash scripts/setup.sh

# Clean up (remove dependencies)
npm run clean
```

---

## 📅 Preparation Timeline

### By Feb 24 (Monday)

- [ ] Clone/download this repository
- [ ] Run `npm install`
- [ ] Configure `.env`
- [ ] Run `npm start` and verify it works
- [ ] Understand directory structure

**Time needed**: 1 hour

---

### By Feb 25 (Tuesday)

- [ ] Read `docs/ARCHITECTURE.md`
- [ ] Run individual skill tests
- [ ] Test the gateway manually with curl
- [ ] Understand the data flow

**Time needed**: 1.5 hours

---

### By Feb 26 (Wednesday)

- [ ] Read `docs/BUILD.md`
- [ ] Complete Phase 1 (Setup)
- [ ] Complete Phase 2 (Composio scaffold)
- [ ] Push progress to GitHub
- [ ] Share with teammates (if you have any)

**Time needed**: 2 hours

---

### By Feb 27 (Thursday)

- [ ] Complete Phase 3 (Composio integration)
- [ ] Run end-to-end test
- [ ] Verify all tests pass
- [ ] Prepare demo scenario
- [ ] Final commit and push

**Time needed**: 2 hours

---

### Feb 28 (Saturday, MORNING)

- [ ] Verify `npm start` works
- [ ] Verify all tests pass
- [ ] Have GitHub link ready
- [ ] Prepare to share with team

---

## 🎯 On Event Day (Feb 28)

1. **1:00 PM**: Arrive at venue with laptop
2. **1:15 PM**: Share this repo with your team
3. **1:25 PM**: Everyone clones and `npm install`
4. **1:35 PM**: Plan what you'll build in 3h 45min
5. **1:45 PM - 5:00 PM**: Build and test
6. **5:30 PM - 6:00 PM**: Demo

**See**: `docs/EVENT_DAY.md` for detailed timeline

---

## 💡 Key Concepts to Understand

### The Agent Loop

```
User sends message
    ↓
Gateway receives it
    ↓
Agent loads context (SOUL.md, IDENTITY.md, MEMORY.md)
    ↓
Agent calls skills (parse, format)
    ↓
Agent calls MCP (Composio for GitHub/Slack)
    ↓
Agent updates MEMORY.md
    ↓
Agent returns response
```

### Skills

Self-contained functions that do specific work:
- `parse-slack-message`: Extract type, priority, keywords
- `format-github-issue`: Create GitHub issue structure

New skills can be added easily (see BUILD.md).

### MCP (Model Context Protocol)

Tools that the agent can call to interact with external APIs:
- GitHub (create issues, add labels, etc.)
- Slack (post messages, get channels, etc.)

Composio provides easy access to these tools.

---

## 🔑 API Keys You Need

| Service | Link | Key Starts With | Used For |
|---------|------|-----------------|----------|
| **Anthropic** | https://console.anthropic.com | `sk-ant-` | LLM calls |
| **GitHub** | https://github.com/settings/tokens | `ghp_` | Create issues |
| **Slack** | https://api.slack.com/apps | `xoxb-` | Post messages |
| **Composio** | https://app.composio.dev | (varies) | API integration |

**See SETUP.md** for detailed instructions for each.

---

## ⚠️ Important Notes

### Never Commit `.env`

The `.env` file contains your secret API keys. It's in `.gitignore` so it won't be committed. Good!

```bash
# This is safe (won't commit .env)
git add -A
git commit -m "Update code"

# But ALWAYS verify
git status
# Should NOT show .env
```

### Always Update MEMORY.md

After each session, record what you learned:

```markdown
### Feb 25 Session
- Got Composio integration working
- GitHub API rate limit is 60 requests/hour
- Slack needs channel lookup before posting
- Next: Add error handling
```

### Ask for Help Early

If stuck for >10 minutes, ask:
1. Your teammate
2. Other builders at the event
3. Event organizers
4. Or check DEBUGGING.md

---

## 🤔 FAQ

**Q: Do I need to push to GitHub before the event?**  
A: Yes, by Feb 27. Your team needs to clone it on Feb 28.

**Q: Can I change the project scope?**  
A: Absolutely! But keep it achievable in 3h 45min.

**Q: What if something breaks?**  
A: Check DEBUGGING.md. If stuck, ask organizers.

**Q: Do I need all 3 teammates?**  
A: No, 1-2 people is fine. Adjust scope accordingly.

**Q: Can I use a different tech stack?**  
A: Better to stick with this one — it's pre-configured.

---

## 🚀 Next Steps Right Now

1. **This minute**: Download this repository
2. **Next 5 min**: Run QUICK_START.md
3. **Next hour**: Complete SETUP.md
4. **By Feb 27**: Complete BUILD.md
5. **Feb 28**: Show up and ship it

---

## 📞 Getting Help

**Before Feb 28:**
1. Check the relevant `.md` file (SETUP, BUILD, ARCHITECTURE, etc.)
2. Search for your issue in the docs
3. Check DEBUGGING.md
4. Create a GitHub issue in this repo

**Feb 28 (During event):**
1. Ask your teammates
2. Ask builders around you
3. Ask event organizers
4. Use your backups (mock data, screenshots)

---

## ✅ Final Checklist

**Before Feb 28:**

- [ ] Repository downloaded/cloned
- [ ] `npm install` successful
- [ ] `.env` configured with API keys
- [ ] `npm start` works
- [ ] Tests pass
- [ ] Pushed to GitHub
- [ ] Shared with teammates
- [ ] Read EVENT_DAY.md
- [ ] Know the demo plan

**Feb 28 Morning:**

- [ ] Laptop charged
- [ ] GitHub link ready
- [ ] Quick mental review of architecture
- [ ] Confident but flexible mindset

---

**You're all set! See you at the unhackathon.** 🦞

Questions? Check the documentation or create an issue on GitHub.
