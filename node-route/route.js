var fs = require('fs');
var url = require('url');

function renderFile(fileName, res) {
    // res.end('Test Connected');
    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile(fileName, null, function(err,data) {
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

module.exports = {
    handleRequest: function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var path = url.parse(req.url).pathname;

        switch (path) {
            case '/':
                renderFile('./index.html', res);
                break;
            case '/users':
                renderFile('./users.html', res);
                break;
        
            default:
                break;
        }
    }
}