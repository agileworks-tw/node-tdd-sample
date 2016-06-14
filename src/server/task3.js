import http from 'http'
import url from 'url'
import router from './router'
import * as requestHandlers from './requestHandlers'

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


export default async function startServer() {

  let onRequest = (request, response) => {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    router(handle, pathname);

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
