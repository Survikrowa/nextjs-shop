import { config } from 'dotenv';

config({
  path: '.env.test',
});
process.on('unhandledRejection', (err) => {
  fail(err);
});
