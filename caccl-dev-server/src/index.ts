// Import libs
import express from 'express';
import https from 'https';

// Import pems
import cert from './pems/cert';
import key from './pems/key';

/**
 * Serve an express app on the given port. Uses HTTPS and a self-signed
 *   certificate
 * @author Gabe Abrams
 * @param opts object containing all arguments
 * @param opts.app the express app to serve
 * @param [opts.port=8080] port number to serve on
 */
const serve = async (
  opts: {
    app: express.Application,
    port: number,
  },
): Promise<void> => {
  // Destructure opts
  const { app } = opts;
  const port = (opts.port ?? 8080);

  // Create a server
  const server = https.createServer(
    { key, cert },
    app,
  );

  // Start listening
  return new Promise((resolve) => {
    server.listen(port);
    server.on(
      'listening', 
      () => {
        console.log(`Now listening on port ${port}`);
        resolve(null);
      },
    );
    server.on(
      'error',
      (err) => {
        if (err.message.includes('EADDRINUSE')) {
          console.log(`\nPort ${port} is already in use. Is another app already running?`);
          process.exit(0);
        }

        console.log(`\nCould not start simulator because an error occurred: ${err.message}`);
        process.exit(0);
      },
    );
  });
};

export default serve;
