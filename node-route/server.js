var http = require('http');
var router = require('./route');

http.createServer(router.handleRequest).listen(3000, function () {
    console.log('Connected!');
});