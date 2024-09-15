import express from 'express';
/**
 * Serve an express app on the given port. Uses HTTPS and a self-signed
 *   certificate
 * @author Gabe Abrams
 * @param opts object containing all arguments
 * @param opts.app the express app to serve
 * @param [opts.port=8080] port number to serve on
 */
declare const serve: (opts: {
    app: express.Application;
    port: number;
}) => Promise<void>;
export default serve;
