# Build Guide - Step by Step

Complete this by Feb 27 to be ready for the event.

---

## Phase 1: Foundations (Feb 24-25)

### Step 1.1: Setup (See `SETUP.md`)

- [ ] Clone repo
- [ ] Run `npm install`
- [ ] Configure `.env`
- [ ] Run `npm start` and verify Gateway starts

### Step 1.2: Understand Architecture

- [ ] Read `docs/ARCHITECTURE.md`
- [ ] Understand skill flow: Parse → Format → (Coming: GitHub)
- [ ] Know where each file goes

### Step 1.3: Test Skills Locally

```bash
# Test the parser
node src/skills/parse-slack-message.js --test

# Test the formatter
node src/skills/format-github-issue.js --test

# Both should show passing tests
```

---

## Phase 2: Build Core Integration (Feb 25-26)

### Step 2.1: Create Composio MCP Server

Create `src/mcp/composio-server.js`:

```javascript
import { createLogger } from '../utils/logger.js';

const logger = createLogger('mcp:composio');

export class ComposioServer {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.ready = false;
  }

  async init() {
    logger.info('Initializing Composio MCP server');
    
    if (!this.apiKey) {
      throw new Error('COMPOSIO_API_KEY not set');
    }
    
    this.ready = true;
    logger.info('✓ Composio MCP server ready');
  }

  async createGitHubIssue(owner, repo, title, body, labels) {
    logger.debug(`Creating GitHub issue: ${title}`);
    
    if (!this.ready) throw new Error('Server not initialized');
    
    return {
      id: Math.floor(Math.random() * 10000),
      title,
      body,
      labels,
      html_url: `https://github.com/${owner}/${repo}/issues/123`,
      created_at: new Date().toISOString()
    };
  }

  async postSlackMessage(channelId, text) {
    logger.debug(`Posting to Slack: ${text}`);
    
    if (!this.ready) throw new Error('Server not initialized');
    
    return {
      channel: channelId,
      text,
      ts: Date.now(),
      posted_at: new Date().toISOString()
    };
  }
}

export async function initComposio() {
  const server = new ComposioServer(process.env.COMPOSIO_API_KEY);
  await server.init();
  return server;
}
```

### Step 2.2: Integrate Composio with Agent

Update `src/agent.js` to use Composio:

```javascript
import { initComposio } from './mcp/composio-server.js';

async function main() {
  try {
    logger.info('🦞 Starting OpenClaw Agent');
    validateEnvironment();
    
    const skills = await registerSkills();
    const composio = await initComposio();  // Add this
    
    const server = await startGateway();
    
    logger.info('✓ OpenClaw Agent is running!');
    
    // ... rest of startup
  } catch (error) {
    logger.error('Failed to start:', error);
    process.exit(1);
  }
}
```

### Step 2.3: Update Gateway to Use Composio

Update `src/gateway.js`:

```javascript
async function handleResponse(req, res) {
  // ... existing code ...
  
  try {
    const userMessage = request.messages?.[0]?.content || '';
    
    const parsed = await executeSkill('parse_slack_message', { messageText: userMessage });
    const formatted = await executeSkill('format_github_issue', { parsedMessage: parsed });
    
    // NEW: Create GitHub issue
    logger.debug('Creating GitHub issue...');
    // const issue = await composio.createGitHubIssue(
    //   process.env.GITHUB_OWNER,
    //   process.env.GITHUB_REPO,
    //   formatted.title,
    //   formatted.body,
    //   formatted.labels
    // );
    
    // NEW: Post confirmation to Slack
    logger.debug('Posting confirmation to Slack...');
    // await composio.postSlackMessage(
    //   channelId,
    //   `Issue created: ${issue.html_url}`
    // );
    
    // ... return response ...
  } catch (error) {
    // ... error handling ...
  }
}
```

### Step 2.4: Test Integration

```bash
# Start agent
npm start

# In another terminal, test full flow
curl -X POST http://localhost:3000/v1/responses \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openclaw:main",
    "messages": [{"role": "user", "content": "Bug: Login crashes on mobile"}]
  }'

# Should return success
```

---

## Phase 3: Composio Integration (Feb 26-27)

### Step 3.1: Install Composio SDK

```bash
npm install @composio/sdk --save
```

### Step 3.2: Implement GitHub Tool via Composio

Replace the mock in `src/mcp/composio-server.js`:

```javascript
import { Composio } from '@composio/sdk';

export class ComposioServer {
  constructor(apiKey) {
    this.client = new Composio({ apiKey });
  }

  async createGitHubIssue(owner, repo, title, body, labels) {
    logger.debug(`Creating GitHub issue: ${title}`);
    
    try {
      const result = await this.client.clientManager.createGithubIssue({
        owner,
        repo,
        title,
        body,
        labels: labels.join(',')
      });
      
      logger.info(`Created issue #${result.number}`);
      return result;
    } catch (error) {
      logger.error('Failed to create issue:', error);
      throw error;
    }
  }

  async postSlackMessage(token, channelId, text) {
    logger.debug(`Posting to Slack channel: ${channelId}`);
    
    try {
      const result = await this.client.clientManager.postSlackMessage({
        token,
        channel: channelId,
        text
      });
      
      logger.info(`Posted message to Slack`);
      return result;
    } catch (error) {
      logger.error('Failed to post to Slack:', error);
      throw error;
    }
  }
}
```

### Step 3.3: Uncomment Integration in Gateway

```javascript
// In src/gateway.js, uncomment the Composio calls:

const issue = await composio.createGitHubIssue(
  process.env.GITHUB_OWNER,
  process.env.GITHUB_REPO,
  formatted.title,
  formatted.body,
  formatted.labels
);

await composio.postSlackMessage(
  process.env.SLACK_BOT_TOKEN,
  process.env.SLACK_CHANNEL_ID,
  `Issue created: ${issue.html_url}`
);
```

### Step 3.4: Test End-to-End

```bash
npm run test:e2e

# Should show:
# ✓ Slack message parsed correctly
# ✓ GitHub issue formatted correctly
# ✓ Issue created successfully
# ✓ Slack confirmation posted
```

---

## Phase 4: Polish & Demo (Feb 27-28)

### Step 4.1: Error Handling

Add try-catch to all Composio calls:

```javascript
try {
  const issue = await composio.createGitHubIssue(...);
  await composio.postSlackMessage(...);
} catch (error) {
  logger.error('Failed to create issue:', error);
  
  return {
    error: {
      type: 'composio_error',
      message: `Failed to create issue: ${error.message}`
    }
  };
}
```

### Step 4.2: Add Logging

Every major operation should log:

```javascript
logger.info('Received Slack message');
logger.debug(`Parsed: ${JSON.stringify(parsed)}`);
logger.info('Creating GitHub issue...');
logger.debug(`Issue details: ${JSON.stringify(issue)}`);
logger.info('✓ Issue created successfully');
```

### Step 4.3: Update MEMORY.md

```javascript
// After creating issue, record it
const memoryEntry = `
- Created GitHub issue #${issue.number}: "${issue.title}"
- From Slack: "${userMessage}"
- Time: ${new Date().toISOString()}
`;

fs.appendFileSync('MEMORY.md', memoryEntry + '\n');
```

### Step 4.4: Test Full Integration

```bash
# Start the agent
npm start

# In another terminal
npm run demo

# Should show:
# ✓ Agent started
# ✓ Received message
# ✓ Parsed message
# ✓ Created GitHub issue
# ✓ Posted to Slack
# ✓ Updated MEMORY.md
```

---

## Verification Checklist

By **Feb 27, 6 PM**:

- [ ] All skills working independently
- [ ] Composio MCP server initializes
- [ ] Gateway handles requests without crashing
- [ ] Full end-to-end test passes
- [ ] Error handling in place
- [ ] Logging shows all steps
- [ ] Code committed to GitHub
- [ ] Demo scenario documented

---

## On Event Day (Feb 28)

### Morning (Before Arriving)

```bash
npm start                 # Verify it runs
npm run test:e2e         # Verify tests pass
git status               # Verify all code committed
```

### With Your Team (1:15-5:00 PM)

If your implementation works:
- Polish and add features
- Improve error messages
- Add retry logic
- Optimize performance

If it doesn't:
- Debug systematically
- Use `npm run debug`
- Check logs: `tail -f logs/openclaw.log`
- Ask teammates for help

---

**Next**: Read `EVENT_DAY.md` for the day-of strategy.
