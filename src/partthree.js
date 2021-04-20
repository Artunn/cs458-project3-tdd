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

async function getDistanceToEarthCenter(coordinateNum1, coordinateNum2) {
    const url = `https://maps.googleapis.com/maps/api/elevation/json?locations=${coordinateNum1},${coordinateNum2}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
    
    try {
        const response = await this.getResponse(url);
        let height = response.data.results[0].elevation;
        //console.log(response);
        console.log("elevation: " + height);
        let distance = calculateDistance(coordinateNum1, coordinateNum2, height);
        return distance.toString();
    } catch (error) {
        console.error(error);
    }
}

async function getResponse(url) {
  return await axios.get(url)
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

function calculateDistance(lat, lon, h){
    // WGS-84 geodetic constants
    var a = 6378137.0;         // WGS-84 Earth semimajor axis (m)
    var b = 6356752.314245;     // Derived Earth semiminor axis (m)
    var f = (a - b) / a;           // Ellipsoid Flatness
    var f_inv = 1.0 / f;       // Inverse flattening

    //const double f_inv = 298.257223563; // WGS-84 Flattening Factor of the Earth 
    //const double b = a - a / f_inv;
    //const double f = 1.0 / f_inv;

    var a_sq = a * a;
    var b_sq = b * b;
    var e_sq = f * (2 - f);    // Square of Eccentricity

    // Converts WGS-84 Geodetic point (lat, lon, h) to the 
    // Earth-Centered Earth-Fixed (ECEF) coordinates (x, y, z).

    // Converts WGS-84 Geodetic point (lat, lon, h) to the 
    // Earth-Centered Earth-Fixed (ECEF) coordinates (x, y, z).
    // Convert to radians in notation consistent with the paper:
    var pi = Math.PI;
    var lambda = lat * (pi / 180);
    var phi = lon * (pi / 180);
    var s = Math.sin(lambda);
    var N = a / Math.sqrt(1 - e_sq * s * s);

    var sin_lambda = Math.sin(lambda);
    var cos_lambda = Math.cos(lambda);
    var cos_phi = Math.cos(phi);
    var sin_phi = Math.sin(phi);

    x = (h + N) * cos_lambda * cos_phi;
    y = (h + N) * cos_lambda * sin_phi;
    z = (h + (1 - e_sq) * N) * sin_lambda;

    p = Math.sqrt((x * x) + (y * y));
    distance = Math.sqrt((p * p) + (z * z));
    return distance;
}

module.exports = { getDistanceToEarthCenter, getResponse, controlCoordinate, calculateDistance }