import * as express from 'express';

const app: express.Application = express();

app.get('/', function (req: express.Request, res: express.Response): void {
  res.send('Hello World!');
})

const port = 3000;
const server = app.listen(port, function (): void {
  console.log('express started on port %s', port)
});

module.exports = server;
