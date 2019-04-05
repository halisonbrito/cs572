const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on("request", function(req,res) {

    res.writeHead(200, {'Content-Type':'video/webm','Content-Disposition':'attachment; filename="test.rmvb"'});

    var readStream = fs.createReadStream (path.join (__dirname,'test.rmvb'), {encoding:'utf8',highWaterMark:16*1024});
    
    readStream.on ('data', function(chunk){
        console.log(chunk);
        res.write(chunk);
    });

    res.on('drain', function(){
        readStream.resume();
    });

    readStream.on('end', function(){
        res.end();
    })
    
}); 

server.listen("199", function() {console.log("Listening on port 199")});

// In this case, there is not block, no high consume of RAM and virtual memory.