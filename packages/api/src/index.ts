import { app } from './server';
const PORT = process.env.APP_PORT || 3000;

const server = app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));

process.on('SIGTERM', () => {
  server.close();
});
