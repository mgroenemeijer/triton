var http = require('http');
var port = process.env.port || 5678;
var ip = '0.0.0.0';
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    
    
    
}).listen(port, ip);
console.log('listening on port: '+port +' and ip: ' + ip);

