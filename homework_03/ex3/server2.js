const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on("request", function(req,res) {

    res.writeHead(200, {'Content-Type':'video/webm','Content-Disposition':'attachment; filename="test.rmvb"'});

     fs.readFile(path.join (__dirname,'test.rmvb'),'utf8', function (err,data) {
        res.write(data);
        res.end();
    });

}); 

server.listen("199", function() {console.log("Listening on port 199")});

// In this case the execution is not blocked, despite of, consumes a high percentage of Ram memory and virtual memory.