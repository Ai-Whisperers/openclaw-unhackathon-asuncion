import { createLogger } from '../utils/logger.js';

const logger = createLogger('skill:format-github-issue');

export async function formatGitHubIssue(parsedMessage) {
  logger.debug(`Formatting GitHub issue from: ${JSON.stringify(parsedMessage)}`);
  
  try {
    const issue = {
      title: generateTitle(parsedMessage),
      body: generateBody(parsedMessage),
      labels: generateLabels(parsedMessage),
      created_at: parsedMessage.timestamp || new Date().toISOString()
    };
    
    logger.info(`Formatted issue: "${issue.title}"`);
    return issue;
  } catch (error) {
    logger.error('Failed to format issue:', error);
    throw error;
  }
}

function generateTitle(message) {
  const content = message.content || '';
  const firstLine = content.split('\n')[0];
  const title = firstLine
    .substring(0, 70)
    .replace(/^(Bug|Feature|Issue|Request):\s*/i, '')
    .trim();
  
  return title || 'Untitled Issue';
}

function generateBody(message) {
  return `
**Type:** ${message.type || 'general'}
**Priority:** ${message.priority || 'medium'}
**Created:** ${message.timestamp || new Date().toISOString()}

## Description

${message.content || 'No description provided'}

## Details

- Keywords: ${(message.keywords || []).join(', ') || 'none'}
- Original Type: ${message.type}

---

*Created via OpenClaw Slack-to-GitHub integration*
  `.trim();
}

function generateLabels(message) {
  const labels = [];
  
  if (message.type === 'bug_report') labels.push('bug');
  if (message.type === 'feature_request') labels.push('enhancement');
  if (message.priority === 'critical') labels.push('critical');
  if (message.priority === 'high') labels.push('high-priority');
  
  labels.push('from-slack');
  
  return labels;
}

if (process.argv[2] === '--test') {
  console.log('Testing format-github-issue...');
  
  const testMessage = {
    type: 'bug_report',
    priority: 'high',
    content: 'Bug: Login page crashes on mobile devices when using Safari',
    keywords: ['login', 'page', 'crashes', 'mobile'],
    timestamp: new Date().toISOString()
  };
  
  const result = await formatGitHubIssue(testMessage);
  console.log('Result:', JSON.stringify(result, null, 2));
  console.log('✓ Test passed');
}
