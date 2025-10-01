import { CONFIG } from '@/config';
import { Calculator } from '@utils/calculator';
import { Logger } from '@utils/logger';

/**
 * Main application entry point
 */
async function main(): Promise<void> {
  const logger = new Logger();
  const calculator = new Calculator();

  logger.info(
    `Starting ${CONFIG.app.name} v${CONFIG.app.version} in ${CONFIG.app.environment} mode...`
  );

  // Example usage
  const sum = calculator.add(10, 5);
  const difference = calculator.subtract(10, 5);
  const product = calculator.multiply(10, 5);
  const quotient = calculator.divide(10, 5);

  logger.info(`Calculator results:`);
  logger.info(`10 + 5 = ${sum}`);
  logger.info(`10 - 5 = ${difference}`);
  logger.info(`10 * 5 = ${product}`);
  logger.info(`10 / 5 = ${quotient}`);

  logger.info('Application completed successfully!');
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', error => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Run the main function
if (require.main === module) {
  main().catch(error => {
    console.error('Application failed to start:', error);
    process.exit(1);
  });
}
