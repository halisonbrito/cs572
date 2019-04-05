const express = require('express');
const dataQuery = require('./data')


const app = express();
//https://developer.github.com/v3/#paginationy

app.get ('/users', function (req,res){

  var values = dataQuery(
     function (dataQuery){
        res.header ({
            'Link': ['http://localhost:300/users?p'+dataQuery.data.info.page,'']

        });

        console.log(dataQuery.data.info);

     }

  );




});



app.listen('300');


