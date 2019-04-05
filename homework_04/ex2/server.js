const http = require('http');
const {Subject} = require('rxjs');
const url = require('url');
const {fork} = require('child_process');

var subject = new Subject();


subject.subscribe (function(data) {
    let parse =  url.parse(data.req.url,true);
    if(parse.query.url){
        const child = fork('./child.js');
        
        child.send(parse.query.url);
        callChild(child,data.res);

    }
    
})


function callChild(child,res){

    child.on ('message', function(data){
    
        if(data == 'finished'){
            res.end();
            child.kill();            
        }else{
            res.write(data);
        }

    })
}

var server = http.createServer();

server.on ('request' , function(req,res){
    
    subject.next({req:req,res:res})
})

server.listen(201);