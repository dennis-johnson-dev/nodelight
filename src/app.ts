import * as http from 'http';
import * as express from 'express';

const app: express.Application = express();

app.get('/', function (req: express.Request, res: express.Response): void {
  res.send('Hello World!');
})

app.listen(3000, function (): void {
  console.log('Example app listening on port 3000!')
});
