const partone = require('../partone');

test('Check coordinate value',()=>{
  expect(partone.controlCoordinate(90.0, -127.554334)).toBe(true);
  expect(partone.controlCoordinate(8, 27)).toBe(true);
  expect(partone.controlCoordinate("xxx","XXX")).toBe(false);
  expect(partone.controlCoordinate('4')).toBe(false);
  expect(partone.controlCoordinate(90,"X")).toBe(false);
})

test.each([
  [39.9334,32.8597,/[A|a]nkara/],
  [41.0082, 28.9784,/[I|i|İ]stanbul/],
  [40.4168,-3.7038,/[M|m]adrid/],
])('Check Distance Calculating',(coordinate1, coordinate2, expectedCity)=>{
  return expect(partone.getCity(coordinate1, coordinate2)).resolves.toMatch(expectedCity);
})