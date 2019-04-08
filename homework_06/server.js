const express  =  require('express');
const morgan = require('morgan');
const routes = require('./routes');
const cors = require('cors');

var app = express();

app.use(morgan('tiny'),cors());
app.use('/api/v1/',express.json(),routes);


app.use (function (err,req, res,next){
    res.status('500').json({error:err})
});
app.listen('122');