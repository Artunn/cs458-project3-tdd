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
  //const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${coordinate1.lat},${coordinate1.lng}&destinations=${coordinate2.lat},${coordinate2.lng}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=37.773279,-122.468780&destinations=37.773245,-122.469502&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
  //const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate1.lat},${coordinate1.lng}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
   

  return new Promise(function(resolve, reject) {
    makeRequest("GET", url, function (response) {
        // let data = response.results[0].address_components;
        // for (let i = 0; i < data.length; i++) {
        //     if (data[i].types[0] == "administrative_area_level_1") {
        //         resolve(data[i].long_name);
        //     }
        // }
        console.log(response);
        resolve("")
    });
  });
    
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

function testSt() {
  alert('hey');
  const bounds = new google.maps.LatLngBounds();
  const markersArray = [];
  const origin1 = { lat: 55.93, lng: -3.118 };
  const origin2 = "Greenwich, England";
  const destinationA = "Stockholm, Sweden";
  const destinationB = { lat: 50.087, lng: 14.421 };

  const geocoder = new google.maps.Geocoder();
  const service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin1, origin2],
      destinations: [destinationA, destinationB],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    },
    (response, status) => {
      if (status !== "OK") {
        alert("Error was: " + status);
      } else {
        console.log(response);
      }
    }
  );
}

module.exports = { calculateDistance, testSt }