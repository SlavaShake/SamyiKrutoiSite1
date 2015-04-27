/**
 * Created by SlavaShake on 24.04.2015.
 */

var html = require('html');
var ts=require('ts');
var server = http.createServer (function(req,res)
{
    fs.readFile('Main.html',function(err,contens)
    {
        res, writeHead(200, {'Content-Type': 'text/html'});
        res.end('contents');
    })
    });

