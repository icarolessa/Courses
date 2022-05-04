https://boilerplate-express-4.icarold.repl.co

let express = require('express');
let app = express();

app.get('/:word/echo', function serverEco(req, res){
  let wordEcho = req.params.word
  res.send({'echo': wordEcho})
})
