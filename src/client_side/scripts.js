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

// let request = async () => {
//     const response = await fetch('http://localhost:8000/hello');
//     const data = await response.text();
//     //dataName = data.name;
// 	console.log(data);
// }

//request();