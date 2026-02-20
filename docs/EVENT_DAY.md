# EVENT DAY STRATEGY – Feb 28, 2026

---

## 🕐 TIMELINE

### 12:30 PM – Before You Leave Home

```bash
# Final verification
npm start                    # OpenClaw runs? ✓
npm run test:e2e            # All tests pass? ✓
git status                  # Code committed? ✓

# If all ✓, you're ready
```

### 1:00 PM – Arrive at Venue

- Arrive 10 minutes early (12:50 PM)
- Find a table for your team
- Charge laptop (even though it should be full)
- Test WiFi (ask organizers for password)
- Verify you can still reach GitHub

### 1:10 PM – 5-Minute Framing

Listen to organizers explain:
- What the unhackathon is
- How to ask for help
- Demo logistics

### 1:15 PM – Team Formation (CRITICAL)

**You have 10-15 minutes to find teammates.**

**What to say**:
```
"I have a Slack-to-GitHub integration ready to go.
I need someone strong in Node.js and someone who's done OAuth.
We can ship this in 3.5 hours.
Interested?"
```

**Roles to fill**:
1. **You**: Orchestration + architecture
2. **Person A**: Skills/Composio integration
3. **Person B**: Testing & debugging
4. (Optional) **Person C**: Demo & documentation

**If you can't find a team**:
- Ask organizers to match you
- Pair with one other person
- Reduce scope (single skill → two endpoints)

### 1:25 PM – Repository Setup (10 min)

With your team:

```bash
# Everyone clones your repo
git clone https://github.com/YOUR_USERNAME/openclaw-unhackathon-asuncion.git
cd openclaw-unhackathon-asuncion

# Everyone installs
npm install

# Everyone verifies
npm start   # Should run without error
npm test    # Should pass

# Set up shared communication
# Create a Discord/Slack channel with your team
```

**Verify all 3 people have**:
- [ ] Code running locally
- [ ] API keys in `.env`
- [ ] Can make changes and commit

### 1:35 PM – Sprint Planning (10 min)

With your team, decide:

```
What we're shipping in 3h 45min:

1. Full end-to-end flow (Parse → Format → GitHub → Slack)
2. Error handling for all paths
3. Logging for debugging
4. Tests for each component
5. Demo walkthrough script

Backup if we get stuck:
- Partial integration (GitHub OR Slack, not both)
- Mock API responses instead of real calls
- Demo with screenshots if live doesn't work
```

**Assign task ownership**:

```
Person A: Finish Composio integration
  - Make GitHub issue creation work
  - Add error handling
  - Test with real GitHub API

Person B: Finish Slack integration
  - Post confirmation messages
  - Handle channel/user lookups
  - Test with real Slack API

You: Orchestration & Demo
  - Wire Person A + Person B together
  - Ensure data flows correctly
  - Prepare demo script
  - Be on "call" to unblock people
```

### 1:45 PM – 4:00 PM: BUILD (2h 15min)

**Coding checkpoint every 30 minutes:**

```
1:45 – Start coding
  [ ] All people have working setup
  [ ] Person A: Composio stub ready
  [ ] Person B: Slack stub ready

2:15 – First integration
  [ ] Person A: GitHub issue creation works (mocked)
  [ ] Person B: Slack message posting works (mocked)
  [ ] You: Both wired together end-to-end

2:45 – Real API calls
  [ ] Person A: Calling real GitHub API (with error handling)
  [ ] Person B: Calling real Slack API (with error handling)
  [ ] You: Full flow tested manually

3:15 – Polish
  [ ] Logging shows every step
  [ ] All errors handled gracefully
  [ ] MEMORY.md updates working
  [ ] Tests passing

3:45 – Demo prep
  [ ] Demo script written (2 min)
  [ ] Demo scenario ready
  [ ] Backup screenshots taken
  [ ] Code clean & committed
```

**If behind schedule (3:30 PM)**:

1. Cut scope: Remove Slack posting, just create GitHub issue
2. Use mocks: Return fake GitHub response instead of real API
3. Demo with video: Record a working version earlier, demo that

**If ahead of schedule (2:30 PM)**:

1. Add features:
   - Slack thread reply with issue link
   - GitHub issue assignment logic
   - Priority-based label assignment
2. Add tests:
   - Unit tests for each skill
   - Integration tests
   - Full E2E test
3. Improve UX:
   - Better error messages
   - Retry logic
   - Rate limit handling

### 4:00 PM – 4:30 PM: Testing (30 min)

```bash
# Run all tests
npm test

# Should show:
# ✓ Skills test (parse, format)
# ✓ Composio integration test
# ✓ End-to-end test
# ✓ All passing
```

If tests fail:

```
1. Check what's broken (read error messages carefully)
2. Is it a code bug or a config issue?
3. Ask teammate: "Can you review this?"
4. Google the error (copy-paste full error message)
5. Ask organizer if stuck >5 min
```

### 4:30 PM – 5:00 PM: Demo Prep (30 min)

**Prepare your 2-3 minute demo:**

```
Setup (30 sec):
"I built a Slack-to-GitHub integration agent.
When someone posts a bug in #bugs, it automatically creates a GitHub issue."

Demo (1.5 min):
[Show Slack] "Here's our Slack workspace"
[Post message] "Bug: Login page crashes on mobile"
[Show GitHub] "Watch as the issue gets created..."
[Refresh] "Boom! Issue #123 created, tagged, linked back"

Code Walk (1 min):
[Show src/] "The magic is in three parts:
1. Parser: Extract issue type and priority
2. Formatter: Create proper GitHub format
3. Orchestration: Wire Slack → GitHub"

Wrap (30 sec):
"It's not perfect — we're handling errors properly but didn't optimize for scale.
But we shipped real code in 3.5 hours.
Code: https://github.com/YOUR_USERNAME/YOUR_REPO"
```

**Backup if demo breaks:**

1. Have screenshot ready: Show successful issue creation
2. Have video ready: Screen-recorded demo from before
3. Have code ready: Be ready to show source code instead

### 5:00 PM – 5:30 PM: Pizza & Networking (30 min)

- Eat pizza
- Chat with builders from other cities
- Exchange LinkedIn info
- Ask about their projects

### 5:30 PM – 6:00 PM: Show & Tell (30 min)

When organizers call on you:

Stand up, show your demo (2-3 min):
- "Quick demo: [do it]"
- "Code: [show GitHub]"
- "Questions?"

**Don't say**:
- "We wanted to do X but ran out of time" (don't explain, just ship)
- "This is just a prototype" (everything is)
- "We had some issues" (everyone does)

**Do say**:
- "It mostly works for happy path, error handling could be better"
- "Next we'd add X"
- "We learned Y"

---

## 🛠️ TROUBLESHOOTING (During Event)

### "Composio API call is hanging"

```bash
# Kill the process
Ctrl+C in terminal running npm start

# Add timeout
# In src/gateway.js:
const timeout = setTimeout(() => {
  throw new Error('Composio timeout - took >10 seconds');
}, 10000);

const result = await composio.createGitHubIssue(...);
clearTimeout(timeout);

# Restart
npm start
```

### "GitHub API says permission denied"

```bash
# Check your token
echo $GITHUB_TOKEN

# Verify it has right scopes
# Go to: https://github.com/settings/tokens
# Should have: repo, workflow

# Recreate token if needed:
# 1. Delete old token
# 2. Create new one
# 3. Update .env
# 4. Restart agent
```

### "Slack API not responding"

```bash
# Check token
echo $SLACK_BOT_TOKEN

# Verify bot has permissions
# Go to: https://api.slack.com/apps > Your App > OAuth & Permissions
# Should have: chat:write, channels:read

# Test with curl
curl -X POST https://slack.com/api/auth.test \
  -H "Authorization: Bearer $SLACK_BOT_TOKEN"

# Should return: "ok": true
```

### "We have 5 minutes left and it's not working"

**Option 1: Demo the pieces separately**
```
"Here's the parser working..."
[Show skill output]
"Here's the formatter..."
[Show issue formatted]
"Here's the GitHub integration..."
[Show mocked response]
```

**Option 2: Demo with screenshots**
```
"Let me show you what we built..."
[Show recorded video or screenshots]
"The full integration works like this..."
```

**Option 3: Demo the code**
```
"Here's our architecture..."
[Show src/ directory tree]
"The magic happens in three functions..."
[Show code, explain briefly]
```

---

## ✅ DEMO CHECKLIST

By 5:30 PM:

- [ ] 2-3 min demo planned and written down
- [ ] Backup plan ready (video or screenshots)
- [ ] Demo script memorized
- [ ] Code looks clean (no debugging prints)
- [ ] All teammates understand what you're demoing
- [ ] Laptop plugged in (critical!)
- [ ] Tested demo once: does it work?
- [ ] GitHub link ready to share

---

## 🎯 SUCCESS CRITERIA

### Minimum (Still Wins)

- Demo runs without crashing
- Shows end-to-end flow (even if mocked)
- Code is on GitHub
- Explanation is clear

### Good (Likely)

- Demo works 80%+
- Shows real GitHub API call
- Shows real Slack message
- Teammates say "nice work"

### Excellent (Possible)

- Demo works 100% flawlessly
- Handles edge cases
- Shows thinking (architecture comments)
- Sponsor impressed

---

## 📞 ASK FOR HELP

**When stuck:**

1. **Ask your teammate first** (they're there to help)
2. **Ask your neighbors** (they want to help)
3. **Ask an organizer** (they'll debug with you)
4. **Don't** spend >10 min on same problem alone

---

## 🚀 GO BUILD

You've prepared. You know what to do. You have working code.

Show up, find your team, and ship something cool.

**See you Saturday.** 🦞
