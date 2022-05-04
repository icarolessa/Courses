https://boilerplate-express-2.icarold.repl.co

let express = require('express');
let app = express();
let caminhoAbsoluto = __dirname + '/views/index.html'

app.get('/', function (req, res){
  res.sendFile(caminhoAbsoluto)
})
