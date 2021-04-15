const parttwo = require('../parttwo');

test('Check Distance Calculating',()=>{
    // Distance From Hatay To Ankara in KM
    expect(parttwo.calculateDistance({lat: 36.216667, lng: 36.166667}, {lat: 39.93, lng: 32.85})).toBeCloseTo(504.47, 1);
    expect(parttwo.calculateDistance({lat: 15.0, lng: -30.0}, {lat: 15.0, lng: 45.0})).toBeCloseTo(8020.42, 1);
})