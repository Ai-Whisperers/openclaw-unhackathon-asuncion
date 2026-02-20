import http from 'http';
import { createLogger } from './utils/logger.js';
import { executeSkill } from './skills/index.js';

const logger = createLogger('gateway');

export async function startGateway() {
  const port = process.env.OPENCLAW_PORT || 3000;
  
  const server = http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/v1/responses') {
      handleResponse(req, res);
    } else if (req.method === 'GET' && req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  });
  
  server.listen(port, () => {
    logger.info(`Gateway listening on port ${port}`);
  });
  
  return server;
}

async function handleResponse(req, res) {
  let body = '';
  
  req.on('data', chunk => {
    body += chunk.toString();
  });
  
  req.on('end', async () => {
    try {
      const request = JSON.parse(body);
      logger.debug(`Received request: ${JSON.stringify(request)}`);
      
      const userMessage = request.messages?.[0]?.content || '';
      
      const parsed = await executeSkill('parse_slack_message', { messageText: userMessage });
      logger.debug(`Parsed message: ${JSON.stringify(parsed)}`);
      
      const formatted = await executeSkill('format_github_issue', { parsedMessage: parsed });
      logger.debug(`Formatted issue: ${JSON.stringify(formatted)}`);
      
      const response = {
        id: `msg-${Date.now()}`,
        object: 'text_completion',
        created: Math.floor(Date.now() / 1000),
        model: 'openclaw:main',
        choices: [{
          index: 0,
          message: {
            role: 'assistant',
            content: `Processed message: "${formatted.title}"`
          },
          finish_reason: 'stop'
        }],
        usage: {
          prompt_tokens: userMessage.split(' ').length,
          completion_tokens: formatted.title.split(' ').length,
          total_tokens: (userMessage.split(' ').length + formatted.title.split(' ').length)
        }
      };
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    } catch (error) {
      logger.error('Error processing request:', error);
      
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        error: {
          type: 'server_error',
          message: error.message
        }
      }));
    }
  });
}
