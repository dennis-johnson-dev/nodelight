import * as bodyParser from 'body-parser';
import Color from './color';
import * as express from 'express';
import * as morgan from 'morgan';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

var colorFile = '/tmp/production';
var lightColor = new Color('#FF0000', colorFile);

app.get('/', function (req: express.Request, res: express.Response): void {
  const body = `
    <form action="/api/color" method="post">
      <input type="color" name="color" onchange="submit()" value="${lightColor.getColor()}" style="width:100%">
    </form>
   `
  res.send(body);
})

app.get('/api/color', function ( req: express.Request, res: express.Response): void {
  res.json({
    color: lightColor.getColor()
  });
})

app.post('/api/color', function (req: express.Request, res: express.Response): void {
  lightColor.setColor(req.body.color);
  console.log(req.body);
  res.json({
    color: lightColor.getColor()
  });
})

const port = 3000;
const server = app.listen(port, function (): void {
  console.log('express started on port %s', port)
});

module.exports = server;
