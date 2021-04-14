const partone = require('../partone');

test('Check coordinate value',()=>{
  expect(partone.controlCoordinate(90.0, -127.554334)).toBe(true);
  expect(partone.controlCoordinate(8, 27)).toBe(true);
  expect(partone.controlCoordinate("xxx","XXX")).toBe(false);
  expect(partone.controlCoordinate('4')).toBe(false);
  expect(partone.controlCoordinate(90,"X")).toBe(false);
})

test('Check get city function',async ()=>{
  expect.assertions(3);
  await partone.getCity(39.9334,32.8597).then(data=>{ expect(data).toMatch(/[A|a]nkara/)});
  await partone.getCity(41.0082, 28.9784).then(data=>{ expect(data).toMatch(/[I|i|İ]stanbul/)});
  await partone.getCity(40.4168,-3.7038).then(data=>{ expect(data).toMatch(/[M|m]adrid/)});
})