const partone = require('../partone');

test('Check coordinate value',()=>{
  expect(partone.controlCoordinate(90.0, -127.554334)).toBe(true);
  expect(partone.controlCoordinate(8, 27)).toBe(true);
  expect(partone.controlCoordinate("xxx","XXX")).toBe(false);
  expect(partone.controlCoordinate('4')).toBe(false);
  expect(partone.controlCoordinate(90,"X")).toBe(false);
})

test('Check get city function',()=>{

})