let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

async function partAButtonTrigger(){
    let cityname = "";
    let coordinate1 = document.getElementById("parta-coordinate1").value;
    let coordinate2 = document.getElementById("parta-coordinate2").value;
    if(controlCoordinate(coordinate1, coordinate2)){
        const pos = {
            lat: parseFloat(coordinate1),
            lng: parseFloat(coordinate2)
          };
        console.log(pos)
        map.setCenter(pos);
        //cityname = await getCity(coordinate1,coordinate2);
        const response = await fetch(`http://localhost:8000/partone?lat=${coordinate1}&lng=${coordinate2}`);
        cityname = await response.text();
        document.getElementById("parta-textdata").innerText = cityname;
    }else{
        document.getElementById("parta-textdata").innerText = "Problematic coordinate input";
    }
}

async function partBButtonTrigger(){
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            alert("Your Browser does not support finding your location!")
        }
    }
    async function showPosition(position) {
        const response = await fetch(`http://localhost:8000/parttwo?lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
        let distanceToCityCenter = await response.text();
        document.getElementById("partb-textlabel1").innerText = distanceToCityCenter;
    }
    getLocation();
}

async function partCButtonTrigger(){
    let distance = "";
    let coordinate1 = document.getElementById("partc-coordinate1").value;
    let coordinate2 = document.getElementById("partc-coordinate2").value;
    if(controlCoordinate(coordinate1, coordinate2)){
        const pos = {
            lat: parseFloat(coordinate1),
            lng: parseFloat(coordinate2)
          };
        console.log(pos)
        map.setCenter(pos);
        const response = await fetch(`http://localhost:8000/partthree?lat=${coordinate1}&lng=${coordinate2}`);
        distance = await response.text();
        console.log("Distance is " + distance);
        document.getElementById("partc-textdata").innerText = distance;
        //alert("hello there sailer ! ");
    }else{
        document.getElementById("partc-textdata").innerText = "Problematic coordinate input";
    }
}

async function partCButtonTriggerAuto(){
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getDistanceToEarthCenterAuto);
        } else { 
            alert("Your Browser does not support finding your location!")
        }
    }
    async function getDistanceToEarthCenterAuto(position) {
        const response = await fetch(`http://localhost:8000/partthree?lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
        let distanceToEarthCenterAutomatically = await response.text();
        document.getElementById("partc-textdata").innerText = distanceToEarthCenterAutomatically;
    }
    getLocation();
}

function controlCoordinate(coordinateNum1, coordinateNum2) {
    if (coordinateNum1 === "" || coordinateNum2 === "") {
        return false;
    }
    if (Number.isNaN(coordinateNum1) || Number.isNaN(coordinateNum2)) {
        return false;
    } else {
        if ((coordinateNum1 < 180 && coordinateNum2 < 180) && (coordinateNum1 > -180 && coordinateNum2 > -180)) {
            return true;
        }
    }
    return false;
}

