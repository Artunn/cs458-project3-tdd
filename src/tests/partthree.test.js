const partthree = require('../partthree');

test('Check distance of center to the Earth', () =>{
    expect(partthree.controlCoordinate(90.0, -127.554334)).toBe(true);
    expect(partthree.calculateDistance(41.0082, 28.9784, 30.60943031311035).toBe(6369004.316294169));
})