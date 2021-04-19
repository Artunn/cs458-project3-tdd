const express = require('express')
const app = express();
const port = 8000;
const fs = require('fs');

const {Client} = require("@googlemaps/google-maps-services-js");

app.get('/', (req, res) => {
  fs.readFile('./webpage-source/index.html', function (err, html) {

    if (err) throw err;    

    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write(html);  
    res.end();  
  });
  
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});