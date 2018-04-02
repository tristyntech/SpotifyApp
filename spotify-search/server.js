const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/test', function (req, res) {
  res.send('test')
});

app.get('/', function (req, res) {
  res.send('hi')
});



app.listen(3001, ()=>{console.log('running on port 3001')})
