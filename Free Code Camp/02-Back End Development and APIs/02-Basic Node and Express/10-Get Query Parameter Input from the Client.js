https://boilerplate-express-4.icarold.repl.co

app.get('/name', function serverEco(req, res){
  let firstName = req.query.first
  let lastName = req.query.last
  
  res.json({"name": `${firstName} ${lastName}`})
})
