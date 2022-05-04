https://boilerplate-express-2.icarold.repl.co

let express = require('express');
let app = express();
let caminhoAbsoluto = __dirname + '/public'

app.use('/public', express.static(__dirname + '/public'))
