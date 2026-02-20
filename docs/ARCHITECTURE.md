# Architecture - How This All Works

---

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    SLACK MESSAGE                            │
│    "Bug: Login crashes on mobile"                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    GATEWAY (HTTP Server)                    │
│  - Receives POST to /v1/responses                           │
│  - Routes to agent                                          │
│  - No processing yet                                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              AGENT (Core Logic)                             │
│                                                             │
│  1. Load context files:                                     │
│     - SOUL.md (personality)                                │
│     - IDENTITY.md (purpose)                                │
│     - MEMORY.md (facts)                                    │
│                                                             │
│  2. Parse: executeSkill('parse_slack_message')             │
│     Input: "Bug: Login crashes on mobile"                  │
│     Output: {                                               │
│       type: 'bug_report',                                  │
│       priority: 'medium',                                  │
│       content: '...',                                      │
│       keywords: [...]                                      │
│     }                                                       │
│                                                             │
│  3. Format: executeSkill('format_github_issue')            │
│     Input: Parsed message                                  │
│     Output: {                                               │
│       title: 'Login crashes on mobile',                    │
│       body: '...',                                         │
│       labels: ['bug', 'from-slack']                        │
│     }                                                       │
│                                                             │
│  4. (TODO) Call GitHub via Composio                        │
│     - Create issue                                         │
│     - Return confirmation                                  │
│                                                             │
│  5. Update MEMORY.md                                        │
│     - Record: "Created issue #123"                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              RESPONSE TO USER                               │
│  "Issue created: github.com/owner/repo/issues/123"         │
│  Posted back to Slack thread                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Components

### 1. Gateway (`src/gateway.js`)

The **HTTP server** that receives messages:

```javascript
POST /v1/responses
{
  "model": "openclaw:main",
  "messages": [{
    "role": "user",
    "content": "Bug: Login page crashes"
  }]
}
```

Responsibilities:
- Listen on port 3000
- Parse incoming requests
- Route to agent
- Return responses
- Handle errors

### 2. Skills (`src/skills/`)

Modular functions that do specific work:

- `parse-slack-message.js`: Extract type, priority, keywords
- `format-github-issue.js`: Create GitHub issue structure

Skills are **synchronous** and **testable**:

```javascript
const parsed = await parseSlackMessage("Bug: Login crashes");
// Returns: { type: 'bug_report', priority: 'medium', ... }
```

### 3. MCP Server (`src/mcp/`)

Connects to external APIs via MCP (Model Context Protocol):

- Composio MCP: GitHub + Slack APIs
- Handles OAuth, rate limiting, errors
- Called by agent for external actions

### 4. Context Files

Persistent state stored as markdown:

- `SOUL.md`: Agent personality ("You are helpful...")
- `IDENTITY.md`: Agent purpose ("Your goal is...")
- `MEMORY.md`: Facts ("User prefers Python...")
- `HEARTBEAT.md`: Scheduled tasks

**Why markdown?** Because the agent can edit it directly without schema validation.

---

## Data Flow: From Slack to GitHub

### 1. User Posts in Slack

```
User types: "Bug: Login button broken on mobile Safari"
→ Slack webhook sends to Gateway
```

### 2. Gateway Processes

```
Gateway receives POST /v1/responses
Body: {
  "model": "openclaw:main",
  "messages": [{"role": "user", "content": "Bug: Login..."}]
}
```

### 3. Agent Executes

```javascript
// Step 1: Parse
const parsed = await parseSlackMessage(userMessage);
// Output: {
//   type: 'bug_report',
//   priority: 'high',
//   content: 'Bug: Login button broken on mobile Safari',
//   keywords: ['login', 'button', 'broken', 'mobile']
// }

// Step 2: Format
const issue = await formatGitHubIssue(parsed);
// Output: {
//   title: 'Login button broken on mobile Safari',
//   body: '**Type:** bug_report\n**Priority:** high\n...',
//   labels: ['bug', 'high-priority', 'from-slack']
// }

// Step 3: (TO DO) Call GitHub
// const createdIssue = await composio.github.createIssue(issue);

// Step 4: Return confirmation
return `Issue created: github.com/owner/repo/issues/123`;
```

### 4. Response Sent Back

```
Gateway returns: {
  "choices": [{
    "message": {
      "content": "Issue created: github.com/owner/repo/issues/123"
    }
  }]
}
→ Post back to Slack thread
```

---

## Skill Architecture

### How Skills are Registered

```javascript
// src/skills/index.js
export async function registerSkills() {
  return [
    {
      name: 'parse_slack_message',
      description: 'Parse Slack message',
      handler: parseSlackMessage,
      inputSchema: { ... }
    },
    {
      name: 'format_github_issue',
      description: 'Format GitHub issue',
      handler: formatGitHubIssue,
      inputSchema: { ... }
    }
  ];
}
```

### How Skills are Called

```javascript
// src/gateway.js or src/agent.js
const result = await executeSkill('parse_slack_message', {
  messageText: userMessage
});
```

### Adding a New Skill

1. Create `src/skills/my-skill.js`:
```javascript
export async function mySkill(input) {
  // Do work
  return result;
}
```

2. Register in `src/skills/index.js`:
```javascript
{
  name: 'my_skill',
  handler: mySkill,
  inputSchema: { ... }
}
```

3. Call it:
```javascript
await executeSkill('my_skill', { param: value });
```

---

## Configuration

### `.env` File

```bash
ANTHROPIC_API_KEY=sk-ant-...       # Claude API
GITHUB_TOKEN=ghp_...               # GitHub API
SLACK_BOT_TOKEN=xoxb-...          # Slack API
OPENCLAW_PORT=3000                 # Server port
LOG_LEVEL=debug                    # Verbosity
```

### `config/`

```javascript
// config/openclaw.config.json
{
  "port": 3000,
  "agent": "main",
  "skills": ["parse_slack_message", "format_github_issue"],
  "timeout": 30000
}
```

---

## Testing

### Unit Tests

Test individual skills:

```bash
npm run test:unit

# Runs: src/skills/*.test.js
```

### Integration Tests

Test skill combinations:

```bash
npm run test:integration

# Runs: src/mcp/*.test.js, etc.
```

### End-to-End Tests

Test full flow (Slack → GitHub):

```bash
npm run test:e2e

# Runs: tests/e2e/*.test.js
```

### Manual Testing

```bash
# Start the agent
npm start

# In another terminal
curl -X POST http://localhost:3000/v1/responses \
  -H "Content-Type: application/json" \
  -d '{"model": "openclaw:main", "messages": [{"role": "user", "content": "Bug: Test"}]}'
```

---

## Error Handling

Skills are isolated:

```javascript
try {
  const result = await executeSkill('parse_slack_message', input);
  return result;
} catch (error) {
  logger.error('Skill failed:', error);
  return { error: error.message };
}
```

If one skill fails, others continue.

---

## Next: Adding Composio Integration

The architecture is ready for the next step: calling GitHub + Slack via Composio:

```javascript
// TODO in src/agent.js
const composioGithub = new Composio.GitHubTool();
const created = await composioGithub.createIssue({
  owner: process.env.GITHUB_OWNER,
  repo: process.env.GITHUB_REPO,
  title: issue.title,
  body: issue.body,
  labels: issue.labels
});

// Post confirmation back to Slack
const composioSlack = new Composio.SlackTool();
await composioSlack.postMessage({
  channel: slackChannelId,
  text: `Issue created: ${created.html_url}`
});
```

---

## Performance Notes

- **Skills are async**: They can be called in parallel
- **Gateway is stateless**: Can handle multiple requests
- **Context files are small**: MEMORY.md should stay <1MB
- **No LLM calls yet**: This version doesn't call Claude, just skills

For production, add:
- Request queuing
- Rate limiting
- Caching (don't parse same message twice)
- Metrics (latency, success rate)

---

**Next step**: Read [`docs/BUILD.md`](./BUILD.md) to start implementing.
