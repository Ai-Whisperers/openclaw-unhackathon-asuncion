import { parseSlackMessage } from './parse-slack-message.js';
import { formatGitHubIssue } from './format-github-issue.js';
import { createLogger } from '../utils/logger.js';

const logger = createLogger('skills');

export async function registerSkills() {
  const skills = [
    {
      name: 'parse_slack_message',
      description: 'Parse a Slack message and extract type, priority, and keywords',
      handler: parseSlackMessage,
      inputSchema: {
        type: 'object',
        properties: {
          messageText: { type: 'string', description: 'The Slack message text' }
        },
        required: ['messageText']
      }
    },
    {
      name: 'format_github_issue',
      description: 'Format a parsed message into a GitHub issue',
      handler: formatGitHubIssue,
      inputSchema: {
        type: 'object',
        properties: {
          parsedMessage: { type: 'object', description: 'Parsed message object' }
        },
        required: ['parsedMessage']
      }
    }
  ];
  
  logger.info(`Registered ${skills.length} skills`);
  return skills;
}

export async function executeSkill(skillName, input) {
  logger.debug(`Executing skill: ${skillName}`);
  
  if (skillName === 'parse_slack_message') {
    return await parseSlackMessage(input.messageText);
  }
  
  if (skillName === 'format_github_issue') {
    return await formatGitHubIssue(input.parsedMessage);
  }
  
  throw new Error(`Unknown skill: ${skillName}`);
}
