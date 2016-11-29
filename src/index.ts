import { buildApp } from './app'

const port = 3000;
const app = buildApp('production');
const server = app.listen(port, function (): void {
  console.log('express started on port %s', port)
});
