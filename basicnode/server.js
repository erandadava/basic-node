var http = require('http');
var fs = require('fs');

function handleRequest(req, res) {
    // res.end('Test Connected');

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(err,data) {
        if (err) {
            res.writeHead(404);
            res.write('file not found');
        }
        else {
            res.write(data);
        }

        res.end();
    });

}


var server = http.createServer(handleRequest);

server.listen(3000, function () {
    console.log('Connected to Port 3000!');
});