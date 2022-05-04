https://boilerplate-express-3.icarold.repl.co/

let express = require('express');
let app = express();

app.get("/json", function (req, res) {
  res.json({'message': 'Hello json'});
});