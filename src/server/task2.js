import http from 'http'

export default async function task1_startServer() {

  let onRequest = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  let app = await new Promise((resolve, reject) => {
    let app = http.createServer(onRequest).listen(8888);
    resolve(app);
  })

  return app;
}
