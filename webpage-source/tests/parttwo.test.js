const parttwo = require('../parttwo');

test.each([
    [{lat: 36.216667, lng: 36.166667}, {lat: 39.93, lng: 32.85}, 504.47],
    [{lat: 15.0, lng: -30.0}, {lat: 15.0, lng: 45.0}, 8020.42],
  ])('Check Distance Calculating',async (coordinate1, coordinate2, expectedDistance)=>{
    let distance = await parttwo.calculateDistance(coordinate1, coordinate2);
    expect( distance).toBeCloseTo(expectedDistance, 1);
})