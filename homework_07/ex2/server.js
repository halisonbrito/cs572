const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');

const express = require('express');
var app = express();



app.use("/secret", function(req,res){
    client.connect (function (err){
    const db = client.db('homework01');
    const collection = db.collection('data');

    collection.findOne({},{'key':1,'message':1 },function(err, result){ 
        var decrypted = require('simple-encryptor')(result.key).decrypt(result.message);
        res.status(200).send(decrypted);
    })

    });

});


app.listen('300');