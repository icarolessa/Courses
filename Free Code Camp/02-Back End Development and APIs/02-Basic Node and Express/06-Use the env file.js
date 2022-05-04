let express = require('express');
let app = express();
process.env.MESSAGE_STYLE='uppercase';

app.get("/json", function (req, res) {

  let response = {
    'message': 'Hello json'
  }

  if(process.env.MESSAGE_STYLE === 'uppercase'){
    response.message = response.message.toUpperCase()
  }

  return res.json(response)
});
