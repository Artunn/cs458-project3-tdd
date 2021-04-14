const partone = require('../partone');

test('Check coordinate text',()=>{
  expect(partone.controlCoordinateString("+90.0, -127.554334")).toBe(true)
  expect(partone.controlCoordinateString("8, 27")).toBe(true)
  expect(partone.controlCoordinateString("47.1231231, -179.9999999")).toBe(true)
  expect(partone.controlCoordinateString("Hello friend")).toBe(false)
  expect(partone.controlCoordinateString("53?x/")).toBe(false)
})