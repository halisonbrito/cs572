const express  =  require('express');
const route = express.Router();
const database = require('./database');

route.post('/lectures',function (req,res,next){
    database.add(req.body);
    res.status(201).send();
});

route.get('/lectures',function (req,res,next){

    database.list( function(result) {
        res.status(201).send(result);
    });
    
});

route.get('/lectures/:id',function (req,res,next){
    var value = database.get(req.params.id);

    database.get(req.params.id, function(result) {
        res.status(201).send(result);
    });

});

route.delete ('/lectures/:id',function (req,res,next){
    database.del(req.params.id);
    res.status(200).send();
})

route.put ('/lectures/:id',function (req,res,next){
    database.update(req.params.id,req.body);
    res.status(202).send();
})

route.get("/lectures/search/:q",function(req, res, next){
    database.findByText(req.params.q, function(result) {
        res.status(201).send(result);
    });

})
module.exports = route;