const express = require('express')
const cors = require('cors')
const app = express();
const port = 8000;

const partone = require('./partone')
const parttwo = require('./parttwo')
const partthree = require('./partthree')

app.get('/partone', cors(),(req, res) => {
  if(!req.params)
    console.log("Error")

  const asyncFindCity = (async() => {
    let result = await partone.getCity(req.query.lat, req.query.lng);

    res.send(result);
  });
  asyncFindCity();

});

app.get('/parttwo', cors(),(req, res) => {
  const asyncCalculateDistance = (async() => {
    let result = await parttwo.getCity(req.query.lat, req.query.lng);

    res.send(result);
  });
  asyncCalculateDistance();
});

app.get('/partthree', cors(),(req, res) => {
  partthree.bar = () => {return "yeah"};

  res.send(partthree.foo());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});