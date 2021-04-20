const partthree = require('../partthree');

test('Check coordinate values',()=>{
    expect(partthree.controlCoordinate(0, -118)).toBe(true);
    expect(partthree.controlCoordinate(1092, 143)).toBe(false);
    expect(partthree.controlCoordinate('11')).toBe(false);
    expect(partthree.controlCoordinate(90,"X")).toBe(false);
  })

test('Check distance of center to the Earth', () =>{
    expect(partthree.calculateDistance(41.0082, 28.9784, 30.60943031311035)).toBe(6369004.316294169); // coordinates of istanbul
    expect(partthree.calculateDistance(39.9334, 32.8597, 891.437744140625)).toBe(6370260.734445383); // coordinates of ankara
    expect(partthree.calculateDistance(40.5499,34.9537, 806.1024780273438)).toBe(6369948.79128152); // coordinates of corum
    expect(partthree.calculateDistance(36.7783, 119.4179, 13.07790184020996)).toBe(6370525.634507292); // coordinates of california
})