/**
 * Configuration and constants for the application
 */
export const CONFIG = {
  app: {
    name: 'Node.js TypeScript Reference',
    version: '1.0.0',
    environment: process.env['NODE_ENV'] || 'development',
  },
  logging: {
    level: process.env['LOG_LEVEL'] || 'info',
    format: 'json',
  },
} as const;

/**
 * Application constants
 */
export const CONSTANTS = {
  DEFAULT_PORT: 3000,
  MAX_RETRIES: 3,
  TIMEOUT_MS: 5000,
} as const;
