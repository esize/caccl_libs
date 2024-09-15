declare class CACCLError extends Error {
    message: string;
    name: string;
    code: string;
    stack: string;
    isCACCLError: boolean;
    /**
     * Create a new CACCL error
     * @author Gabe Abrams
     * @param opts object containing all arguments
     * @param [opts.message] error message
     * @param [opts.code] error code
     * @param [opts.stack] stack trace to associate with the error
     */
    constructor(opts: {
        message?: string;
        code?: string;
        stack?: string;
    });
}
export default CACCLError;
