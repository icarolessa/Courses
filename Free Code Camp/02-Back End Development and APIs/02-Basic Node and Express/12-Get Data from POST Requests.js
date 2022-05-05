https://boilerplate-express-5.icarold.repl.co

let express = require('express');
let bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.urlencoded({'extended': false}))
app.use(bodyParser.json());

app.post('/name', (req, res) => {
  const { first: firstName,  last: lastName} = req.body;
 
  res.json({
    name: `${firstName} ${lastName}`
  });
});
