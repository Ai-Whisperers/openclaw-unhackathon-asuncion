#!/usr/bin/env node

/**
 * OpenClaw Agent - Main Entry Point
 * 
 * This is the core agent that:
 * 1. Loads configuration from .env
 * 2. Initializes the OpenClaw Gateway
 * 3. Registers skills and MCP servers
 * 4. Starts listening for messages
 */

import 'dotenv/config';
import { createLogger } from './utils/logger.js';
import { registerSkills } from './skills/index.js';
import { startGateway } from './gateway.js';

const logger = createLogger('agent');

/**
 * Start the OpenClaw Agent
 */
async function main() {
  try {
    logger.info('🦞 Starting OpenClaw Agent');
    
    // Log configuration
    logger.info(`Node environment: ${process.env.NODE_ENV || 'development'}`);
    logger.info(`Port: ${process.env.OPENCLAW_PORT || 3000}`);
    logger.info(`Agent name: ${process.env.OPENCLAW_AGENT_NAME || 'main'}`);

    // Validate required environment variables
    validateEnvironment();
    
    // Register all skills
    logger.info('📚 Registering skills...');
    const skills = await registerSkills();
    logger.info(`✓ ${skills.length} skills registered`);
    
    // Start the Gateway
    logger.info('🚀 Starting Gateway...');
    const server = await startGateway();
    
    logger.info('✓ OpenClaw Agent is running!');
    logger.info(`💬 Ready to receive messages on port ${process.env.OPENCLAW_PORT || 3000}`);
    
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      logger.info('Shutting down gracefully...');
      server.close();
      process.exit(0);
    });
    
  } catch (error) {
    logger.error('Failed to start agent:', error);
    process.exit(1);
  }
}

/**
 * Validate that required environment variables are set
 */
function validateEnvironment() {
  const required = ['ANTHROPIC_API_KEY', 'GITHUB_TOKEN', 'SLACK_BOT_TOKEN'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. ` +
      `Please check your .env file.`
    );
  }
  
  logger.info('✓ All required environment variables present');
}

// Start the agent
main();
