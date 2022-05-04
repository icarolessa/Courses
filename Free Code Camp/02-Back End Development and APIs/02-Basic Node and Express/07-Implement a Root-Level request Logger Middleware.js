https://boilerplate-express-4.icarold.repl.co/

let express = require('express');
let app = express();


app.use('/', function register(req, res, next){
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next()
})
