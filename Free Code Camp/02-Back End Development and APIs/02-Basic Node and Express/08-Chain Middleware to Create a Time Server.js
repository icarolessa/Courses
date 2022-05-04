https://boilerplate-express-4.icarold.repl.co/

let express = require('express');
let app = express();


app.get('/now', function timeActual(req, res, next){
  req.time = new Date().toString()
  next()
}, function timeReq(req, res){
  res.send({'time': req.time})
})
