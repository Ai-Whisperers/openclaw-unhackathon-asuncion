import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure logs directory exists
const logsDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

export function createLogger(component) {
  const logFile = process.env.LOG_FILE || path.join(logsDir, 'openclaw.log');
  const level = process.env.LOG_LEVEL || 'info';
  
  const levels = { error: 0, warn: 1, info: 2, debug: 3 };
  const currentLevel = levels[level] || 2;
  
  return {
    error: (msg, err) => {
      if (currentLevel >= levels.error) {
        const timestamp = new Date().toISOString();
        const output = `[${timestamp}] [${component}] ERROR: ${msg}`;
        console.error(output, err || '');
        try {
          fs.appendFileSync(logFile, output + '\n');
        } catch (e) {
          console.error('Failed to write log:', e);
        }
      }
    },
    warn: (msg) => {
      if (currentLevel >= levels.warn) {
        const timestamp = new Date().toISOString();
        const output = `[${timestamp}] [${component}] WARN: ${msg}`;
        console.warn(output);
        try {
          fs.appendFileSync(logFile, output + '\n');
        } catch (e) {
          console.error('Failed to write log:', e);
        }
      }
    },
    info: (msg) => {
      if (currentLevel >= levels.info) {
        const timestamp = new Date().toISOString();
        const output = `[${timestamp}] [${component}] INFO: ${msg}`;
        console.log(output);
        try {
          fs.appendFileSync(logFile, output + '\n');
        } catch (e) {
          console.error('Failed to write log:', e);
        }
      }
    },
    debug: (msg) => {
      if (currentLevel >= levels.debug) {
        const timestamp = new Date().toISOString();
        const output = `[${timestamp}] [${component}] DEBUG: ${msg}`;
        console.log(output);
        try {
          fs.appendFileSync(logFile, output + '\n');
        } catch (e) {
          console.error('Failed to write log:', e);
        }
      }
    }
  };
}
