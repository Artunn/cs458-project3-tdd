function controlCoordinate(coordinateNum1, coordinateNum2) {
    if (!(isNaN(coordinateNum1) || isNaN(coordinateNum2))) {
        if ((coordinateNum1 && coordinateNum2 <= 180) && coordinateNum1 && coordinateNum2 >= -180) {
            return true;
        }
    }
    return false;
}

module.exports = {controlCoordinate}