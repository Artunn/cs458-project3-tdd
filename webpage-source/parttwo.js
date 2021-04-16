// Adapted from Stackoverflow https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
// function calculateDistance(coordinate1, coordinate2) {
//   let lat1 = coordinate1.lat;
//   let lat2 = coordinate2.lat;
//   let lon1 = coordinate1.lng;
//   let lon2 = coordinate2.lng;

//   var R = 6371; // Radius of the earth in km
//   var dLat = deg2rad(lat2 - lat1);  // deg2rad below
//   var dLon = deg2rad(lon2 - lon1);
//   var a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//     Math.sin(dLon / 2) * Math.sin(dLon / 2)
//     ;
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   var d = R * c; // Distance in km
//   return d;
// };

function deg2rad(deg) {
  return deg * (Math.PI / 180);
};

async function calculateDistance(coordinate1, coordinate2) {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${coordinate1.lat},${coordinate1.lng}&destinations=${coordinate2.lat},${coordinate2.lng}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
  let res;

  await makeRequest("GET",url,function(response){
      console.log(typeof(response));
      console.log(response);
      res = 6;
  })

  return res;
    
}

function makeRequest (method, url, done) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function () {

    done(JSON.parse(xhr.response));
  };
  xhr.onerror = function () {
      console.log("bbb")
    done(JSON.parse(xhr.response));
  };
  xhr.send();
}

module.exports = { calculateDistance }