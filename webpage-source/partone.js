function controlCoordinate(coordinateNum1, coordinateNum2) {
    if(coordinateNum1 === "" || coordinateNum2 === "" ){
        return false;
    }
    if (Number.isNaN(coordinateNum1) || Number.isNaN(coordinateNum2)) {
       return false;
    }else{
        if ((coordinateNum1 < 180 && coordinateNum2 < 180) && (coordinateNum1 > -180 && coordinateNum2 > -180)) {
            return true;
        }
    }
    return false;
}

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

function buttonTrigger(){
    let coordinate1 = document.getElementById("parta-coordinate1").value;
    let coordinate2 = document.getElementById("parta-coordinate2").value;
    if(controlCoordinate(coordinate1, coordinate2)){
        const pos = {
            lat: parseFloat(coordinate1),
            lng: parseFloat(coordinate2)
          };
        console.log(pos)
        map.setCenter(pos);
        getCity(coordinate1,coordinate2,document.getElementById("parta-textdata"));
    }else{
        getCity(coordinate1,coordinate2,document.getElementById("parta-textdata"));
    }
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

function getCity(coordinateNum1, coordinateNum2,item) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinateNum1},${coordinateNum2}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
    makeRequest("GET",url,function(response){
        console.log(typeof(response));
        console.log(response);
        let data = response.results[0].address_components;
        for(let i = 0; i < data.length; i++)
        {
            if(data[i].types[0] == "administrative_area_level_1"){
                console.log(data[i].long_name + "X")
                item.innerText = data[i].long_name;
                return;
            }
        }
        item.innerText = "";
        return;
    })
}

exports = { controlCoordinate, getCity }