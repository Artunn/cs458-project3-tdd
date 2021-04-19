const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require('axios')

function makeRequest(method, url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        return done(JSON.parse(xhr.response));
    };
    xhr.onerror = function () {
        return done(JSON.parse(xhr.response));
    };
    xhr.send();
}

async function getCity(coordinateNum1, coordinateNum2) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinateNum1},${coordinateNum2}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
    
    try {
        const response = await this.getResponse(url);
        let data = response.data.results[0].address_components;
        // return data;
        for (let i = 0; i < data.length; i++) {
            if (data[i].types[0] == "administrative_area_level_1") {
                return data[i].long_name;
            }
        }
        return ""
    } catch (error) {
        console.error(error);
    }
}

async function getResponse(url) {
  return await axios.get(url)
}

module.exports = { getCity, getResponse }