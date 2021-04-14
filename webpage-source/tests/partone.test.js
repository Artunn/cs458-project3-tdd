const partone = require('../partone');

test('Check coordinate value',()=>{
  expect(partone.controlCoordinate("+90.0, -127.554334")).toBe(true)
  expect(partone.controlCoordinate("8, 27")).toBe(true)
  expect(partone.controlCoordinate("47.1231231, -179.9999999")).toBe(true)
  expect(partone.controlCoordinate("Hello friend")).toBe(false)
  expect(partone.controlCoordinate("53?x/")).toBe(false)
})