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
    let cityName = await partone.getCity(req.query.lat, req.query.lng);
    let distance = await parttwo.calculateDistance({lat: req.query.lat, lng: req.query.lng}, cityName);

    res.send(distance);

  });
  asyncCalculateDistance();

});

app.get('/partthree', cors(),(req, res) => {
  if(!req.params)
    console.log("Error")

  const asyncFindDistanceToCenter = (async() => {
    try{
      let distance_to_earth_center = await partthree.getDistanceToEarthCenter(req.query.lat, req.query.lng);
      console.log("distance is " + distance_to_earth_center);
      res.send(distance_to_earth_center);
    }catch(err){
      console.log("inside catch");
      console.log(err);
    }

  });
  asyncFindDistanceToCenter();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});