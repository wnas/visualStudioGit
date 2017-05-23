"use strict";
var http = require("http");
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    // comment just to commit
}).listen(port);
//# sourceMappingURL=server.js.map