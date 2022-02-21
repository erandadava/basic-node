var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Test');
})

app.get('/users/:name', function(req, res){
    res.send("Namanya adalah " + req.params.name);
})

app.listen(3000, function(){
    console.log('Connected!')
});