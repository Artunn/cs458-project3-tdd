
const partthree = require('../partthree');

test('Check coordinate values',()=>{
    expect(partthree.controlCoordinate(0, -118)).toBe(true);
    expect(partthree.controlCoordinate(1092, 143)).toBe(false);
    expect(partthree.controlCoordinate('11')).toBe(false);
    expect(partthree.controlCoordinate(90,"X")).toBe(false);
  })

test('Check distance of center to the Earth', () =>{
    expect(partthree.calculateDistance(41.0082, 28.9784, 30.60943031311035)).toBeCloseTo(6369004.316294169); // coordinates of istanbul
    expect(partthree.calculateDistance(39.9334, 32.8597, 891.437744140625)).toBeCloseTo(6370260.734445383); // coordinates of ankara
    expect(partthree.calculateDistance(40.5499, 34.9537, 806.1024780273438)).toBeCloseTo(6369948.79128152); // coordinates of corum
    expect(partthree.calculateDistance(36.7783, 119.4179, 13.07790184020996)).toBeCloseTo(6370525.634507292); // coordinates of california
})

test.each([
  [{lat: 41.0082, lng: 28.9784}, "6369004.316294169"],
  [{lat: 39.9334, lng: 32.8597}, "6370260.734445383"],
  [{lat: 40.5499, lng: 34.9537}, "6369948.79128152"],
  [{lat: 36.7783, lng: 119.4179}, "6370525.634507292"],
])('Check Distance Calculating to Earth Center', (coordinate1, coordinate2, expectedDistance)=>{
  const partthree = require('../partthree');
  partthree.getResponse = jest.fn(async (url) => {
    return {
      data: {
        results: [
          {
            elevation : expectedDistance
          }
        ]
      }
    }
  });
  return expect( partthree.getDistanceToEarthCenter(coordinate1, coordinate2)).resolves.toEqual(expectedDistance);
})

