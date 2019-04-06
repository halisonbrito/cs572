const express = require('express');
const dataQuery = require('./data');
const moment = require('moment');


const app = express();

app.enable('case sensitive routing');
app.enable('strict routing');
app.set('x-powered-by',false);

app.get ('/users', function (req,res){

  var values = dataQuery(
     function (dataQuery){
        res.header ({
            'Content-type':'application/json', 
            'Link': '<http://localhost:300/users?p='+dataQuery.data.info.page+'>; rel="first"'+
            ',<http://localhost:300/users?p='+dataQuery.data.info.page+'>; rel="last"',
            'Cache-Control':'private',
            'Last-Modifield':moment().add(1, 'days')

        });


        res.json(dataQuery.data.results);
        
     }

  );

});



app.listen('300');


//https://developer.github.com/v3/#paginationy
//https://github.com/thlorenz/parse-link-header
