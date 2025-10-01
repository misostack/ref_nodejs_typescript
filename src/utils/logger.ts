/**
 * Simple logging utility class
 */
export class Logger {
  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  }

  /**
   * Log an info message
   */
  info(message: string): void {
    // eslint-disable-next-line no-console
    console.log(this.formatMessage('info', message));
  }

  /**
   * Log a warning message
   */
  warn(message: string): void {
    // eslint-disable-next-line no-console
    console.warn(this.formatMessage('warn', message));
  }

  /**
   * Log an error message
   */
  error(message: string): void {
    // eslint-disable-next-line no-console
    console.error(this.formatMessage('error', message));
  }

  /**
   * Log a debug message
   */
  debug(message: string): void {
    // eslint-disable-next-line no-console
    console.debug(this.formatMessage('debug', message));
  }
}