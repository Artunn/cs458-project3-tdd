axios = require('axios');

async function calculateDistance(coordinate1, coordinate2) {
    let url;
    if (typeof coordinate2 === 'string' || coordinate2 instanceof String) {
        url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${coordinate1.lat},${coordinate1.lng}&destinations=${coordinate2}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
    } else {
        url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${coordinate1.lat},${coordinate1.lng}&destinations=${coordinate2.lat},${coordinate2.lng}&key=AIzaSyDFr6F19kpa0aYoBWUM11xDPQQfMeS5vw0`;
    }

    try {
        const response = await this.getResponse(url);
        return response.data.rows[0].elements[0].distance.text;
    } catch (error) {
        console.error(error);
    }
  
}

async function getResponse(url) {
    return await axios.get(url)
}

module.exports = { calculateDistance, getResponse }