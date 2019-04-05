const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on("request", function(req,res) {

     var read = fs.readFileSync( path.join (__dirname,'test.rmvb'),"UTF-8" );

     res.writeHead(200, {'Content-Type':'video/webm','Content-Disposition':'attachment; filename="test.rmvb"'});
     res.write(read)
     res.end();
}); 

server.listen("199", function() {console.log("Listening on port 199")});

// In this case the execution is blocked and consumes a high percentage of Ram memory and virtual memory.