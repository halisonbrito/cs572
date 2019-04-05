const fs = require('fs');
const path = require('path');


process.on ('message', function(msg){
  
    var readStream = fs.createReadStream (path.join (__dirname,msg), {encoding:'utf8',highWaterMark:16*1024});
    
    readStream.on ('data', function(chunk){
        console.log(chunk);
        process.send(chunk);
    });

    readStream.on('end', function(){
        process.send('finished');
    })

});