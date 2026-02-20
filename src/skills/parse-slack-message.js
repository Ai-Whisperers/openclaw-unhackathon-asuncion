import { createLogger } from '../utils/logger.js';

const logger = createLogger('skill:parse-slack-message');

export async function parseSlackMessage(messageText) {
  logger.debug(`Parsing Slack message: "${messageText}"`);
  
  try {
    const parsed = {
      type: detectMessageType(messageText),
      priority: detectPriority(messageText),
      content: messageText.trim(),
      keywords: extractKeywords(messageText),
      timestamp: new Date().toISOString()
    };
    
    logger.info(`Parsed message: type=${parsed.type}, priority=${parsed.priority}`);
    return parsed;
  } catch (error) {
    logger.error('Failed to parse message:', error);
    throw error;
  }
}

function detectMessageType(text) {
  const lower = text.toLowerCase();
  
  if (lower.includes('bug') || lower.includes('crash') || lower.includes('error')) {
    return 'bug_report';
  }
  if (lower.includes('feature') || lower.includes('request')) {
    return 'feature_request';
  }
  if (lower.includes('doc') || lower.includes('documentation')) {
    return 'documentation';
  }
  
  return 'general';
}

function detectPriority(text) {
  const lower = text.toLowerCase();
  
  if (lower.includes('critical') || lower.includes('urgent') || lower.includes('blocking')) {
    return 'critical';
  }
  if (lower.includes('high') || lower.includes('important')) {
    return 'high';
  }
  if (lower.includes('low') || lower.includes('minor')) {
    return 'low';
  }
  
  return 'medium';
}

function extractKeywords(text) {
  const words = text.toLowerCase().split(/\s+/);
  const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'is', 'was']);
  
  return words
    .filter(w => w.length > 3 && !stopWords.has(w))
    .slice(0, 5);
}

// Testing
if (process.argv[2] === '--test') {
  console.log('Testing parse-slack-message...');
  
  const testCases = [
    'Bug: Login page crashes on mobile devices',
    'Feature request: Dark mode support',
    'Critical issue: Database connection pool exhausted',
    'Update docs for API v2'
  ];
  
  for (const testCase of testCases) {
    const result = await parseSlackMessage(testCase);
    console.log(`Input: "${testCase}"`);
    console.log(`Output:`, JSON.stringify(result, null, 2));
    console.log('');
  }
  
  console.log('✓ All tests passed');
}
