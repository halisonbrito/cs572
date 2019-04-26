var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const bcrypt = require('bcrypt');

var apiRouter = express.Router();
const jwt  = require('jsonwebtoken');
const PRIVATE_KEY= "test";

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/api/protected", function(req, res, next) {
  let token = req.headers['authorization'];
  console.log(token);
  if(!token)
  {
    return  next(createError(401, "Please pass in token"));
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
      if (err) {
        next(createError(401, "Token is invalid"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    next(createError(401, "Please pass in token"));
  }

  // var token = jwt.sign(payload, privateKEY, signOptions);
});


apiRouter.get("/protected", (req, res, next)=>{
  res.json({secret:"secret!"});
});
apiRouter.post('/signup',function(req, res, next) {
  let newSignUp = {...req.body};

  bcrypt.hash(newSignUp.password, 2, function(err, hash) {
    // console.log("encrypted password:" + hash);
    newSignUp.password = hash;
    users.push(newSignUp);
    res.json({result:true});
  });

});
apiRouter.post('/login',function(req, res, next) {
  let found = users.filter(user=>user.userData.email===req.body.username);
  if(found.length == 0){
    res.json({result:false});
    return;
  }
  let user = found[0];
  bcrypt.compare(req.body.password,user.password,(err,same)=>{
    console.log("--------------"+same);
    if(same){
        // console.log("encrypted password:" + hash);
        let token = jwt.sign({username: "username"},
        PRIVATE_KEY,
        { expiresIn: '12h' 
        }
      );
      res.json({
        result: true,
        message: 'Authentication successful!',
        openId: token
      });
    } else {
      res.json({result:false});
    }
  })

  

});

app.use('/api', apiRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500).send(err.message);
});

app.listen(3000,()=>console.log("Server is listening on the port!"));
