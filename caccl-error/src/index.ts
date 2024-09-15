/**
 * Custom CACCL error that contains a message and code
 * @author Gabe Abrams
 */
class CACCLError extends Error {
  public message: string;
  public name: string;
  public code: string;
  public stack: string;
  public isCACCLError: boolean;

  /**
   * Create a new CACCL error
   * @author Gabe Abrams
   * @param opts object containing all arguments
   * @param [opts.message] error message
   * @param [opts.code] error code
   * @param [opts.stack] stack trace to associate with the error
   */
  constructor(
    opts: {
      message?: string,
      code?: string,
      stack?: string,
    },
  ) {
    super(opts.message);

    this.message = opts.message || 'An unknown error occurred.';
    this.name = 'CACCLError';
    this.code = String(opts.code || 'NOCODE1').toUpperCase();
    this.stack = opts.stack || new Error(this.message).stack;

    this.isCACCLError = true;
  }
}

export default CACCLError;
