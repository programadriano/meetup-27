var os = require('os');

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.status(200).send({
        hostname: os.hostname(),
        platform: os.platform(),
        arch: os.arch(),
        networkInterfaces: os.networkInterfaces(),
    });
})

app.listen(3000, function () {
    console.log(`app listening on port ${3000}`)
})
