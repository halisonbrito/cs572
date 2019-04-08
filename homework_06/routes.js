const express  =  require('express');
const route = express.Router();
const database = require('./database');

route.post('/grades',function (req,res,next){
    database.add(req.body);
    res.status(201).send();
});

route.get('/grades',function (req,res,next){
    res.status(200).json (database.list());
});

route.get('/grades/:id',function (req,res,next){
    var value = database.get(req.params.id);
    console.log(value );
    if(value){
        res.status(200).send(value);
    }else{
        res.status(204).send();;
    }
});

route.delete ('/grades/:id',function (req,res,next){
    database.del(req.params.id);
    res.status(200).send();
})

route.put ('/grades/:id',function (req,res,next){
    database.update(req.params.id,req.body);
    res.status(202).send();
})

module.exports = route;