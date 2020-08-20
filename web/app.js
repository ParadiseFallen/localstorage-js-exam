const express = require('express')

const app = express()
const restAddress = '/api'
const port = process.env.WEB_PORT || 4000;
const host = process.env.WEB_HOST || 'localhost';

app.use('/', express.static(__dirname + '/public'));

app.listen(port, host, function () {
    console.log(`running on http://${host}:${port}`);
  });