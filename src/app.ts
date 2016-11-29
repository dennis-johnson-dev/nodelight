import * as bodyParser from 'body-parser';
import Color from './color';
import * as express from 'express';
import * as morgan from 'morgan';

export const buildApp = (env: string) => {
  const app: express.Application = express();

  app.use(bodyParser.urlencoded({ extended: true }));

  if (env !== 'test') {
    app.use(morgan('combined'));
  }

  const colorFile = '/tmp/production';
  const lightColor = new Color('#FF0000', colorFile);

  app.get('/', function (req: express.Request, res: express.Response): void {
    const body = `
    <form action="/api/color" method="post">
    <input type="color" name="color" onchange="submit()" value="${lightColor.getColor()}" style="width:100%">
    </form>
    `
    res.send(body);
  });

  app.get('/api/color', function ( req: express.Request, res: express.Response): void {
    res.json({
      color: lightColor.getColor()
    });
  });

  app.post('/api/color', function (req: express.Request, res: express.Response): void {
    lightColor.setColor(req.body.color);
    res.json({
      color: lightColor.getColor()
    });
  });

  return app;
};
