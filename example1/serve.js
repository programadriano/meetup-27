var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.status(200).send({
    title: "Example 1 negocios online",
    version: "0.0.1"
  });
})

app.listen(3000, function () {
  console.log(`app listening on port ${3000}`)
})
