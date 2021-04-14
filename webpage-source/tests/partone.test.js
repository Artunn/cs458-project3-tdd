const partone = require('../partone');

test('Check coordinate value',()=>{
  expect(partone.controlCoordinate(+90.0, -127.554334)).toBe(true)
  expect(partone.controlCoordinate(8, 27)).toBe(true)
  expect(partone.controlCoordinate(183.0, -182)).toBe(true)
  expect(partone.controlCoordinate("Hello friend")).toBe(false)
  expect(partone.controlCoordinate('/')).toBe(false)
})