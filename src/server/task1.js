import http from 'http'

export default async function task1_startServer() {

  let app = await new Promise((resolve, reject) => {
    let app = http.createServer(function(request, response) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World");
      response.end();

    }).listen(8888);
    resolve(app);

  })

  return app;
}
