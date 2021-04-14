const axios = require('axios');

function controlCoordinate(coordinateNum1, coordinateNum2) {
    if (!(isNaN(coordinateNum1) || isNaN(coordinateNum2))) {
        if ((coordinateNum1 && coordinateNum2 <= 180) && coordinateNum1 && coordinateNum2 >= -180) {
            return true;
        }
    }
    return false;
}

function getCity(coordinateNum1, coordinateNum2) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinateNum1},${coordinateNum2}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
    return axios.get(url).then(function(response){
        let data = response.data.results[0].address_components;
        // console.log(data);
        for(let i = 0; i < data.length; i++)
        {
            if(data[i].types[0] == "administrative_area_level_1"){
                return data[i].long_name;
            }
        }
    });
}

module.exports = { controlCoordinate, getCity }