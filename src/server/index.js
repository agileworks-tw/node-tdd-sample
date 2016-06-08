import http from 'http'

export default async function startServer() {

  await new Promise((resolve, reject) => {
    http.createServer(function(request, response) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World");
      response.end();

    }).listen(8888);
    resolve();

  })
}
