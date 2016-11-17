import * as http from 'http';

function hello(request: http.IncomingMessage, response: http.ServerResponse) {
  response.end('Hello World');
}

const server = http.createServer(hello);

const port = 3000
server.listen(port, function() {
  console.log("%s TypeScript listening on %s", process.pid, port);
});
