import * as express from 'express';
import * as bodyParser from 'body-parser';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req: express.Request, res: express.Response): void {
  const body = `
  <form action="/" method="post">
    <input type="color" name="color" onchange="submit()" value="#FF00FF" style="width:100%">
  </form>
   `
  res.send(body);
})

app.post('/', function (req: express.Request, res: express.Response): void {
  const body = `
  <p>Setting color to:</p>
  <p>${req.body.color}</p>
  `
  res.send(body);
})

const port = 3000;
const server = app.listen(port, function (): void {
  console.log('express started on port %s', port)
});

module.exports = server;
