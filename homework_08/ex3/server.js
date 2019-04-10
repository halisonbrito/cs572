const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();


var client = new MongoClient('mongodb://localhost:27017');
let db = false;
app.use( express.json(), function(req,res,next){

    if(!db){
        client.connect(function(err){
            connected = true;
            db = client.db('test');
            next();
        });
    }else{
            next();
        }

});  


app.post("/location",function(req,res){
    
    db.collection('col').insertOne(req.body);
    res.status(200).send();

})

app.get("/location/:cat/:name?",function(req,res){

    let query;
    if(req.params.name){
        query = db.collection('col').find({location:{$near:[41.017654,-91.9665342]},category:req.params.cat, 
         name:req.params.name})
    } else{
        query = db.collection('col').find({location:{$near:[41.017654,-91.9665342]},category:req.params.cat})
    }
    
    query.limit(3).toArray(
        function(err,result){
            console.log(result); 
            res.send(result);
        });

})


app.listen(300);