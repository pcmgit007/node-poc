var http = require("http");
var url = require("url");

//1. Default way of starting an http server
/*http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);*/

//2. Using callbacks for asynchronous invocation
/*function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");*/


//3. Modularization - which will be used in index.js
/*function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World..!!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}*/

//4. Using url and querystring modules
/*function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received.");
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World...!!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started..!!");
}*/

//5. Using request handlers
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received.");
        var content = route(handle, pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started..!!");
}

exports.start = start;