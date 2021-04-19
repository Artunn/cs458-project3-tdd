test.each([
    [{lat: 36.216667, lng: 36.166667}, {lat: 39.93, lng: 32.85}, "680"],
    [{lat: 15.0, lng: -30.0}, {lat: 15.0, lng: 45.0}, "8020.42"],
  ])('Check Distance Calculating', (coordinate1, coordinate2, expectedDistance)=>{

    const parttwo = require('../parttwo');
    parttwo.getResponse = jest.fn(async (url) => {
      return {
        data: {
          rows: [
            {
              elements: [
                {
                distance: {
                    text: expectedDistance
                  }
                }
              ]
            }
          ]
        }
      }
    });

    return expect( parttwo.calculateDistance(coordinate1, coordinate2)).resolves.toEqual(expectedDistance, 1);
})