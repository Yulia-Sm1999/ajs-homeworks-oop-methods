import Magician from '../src/Magician';

test('should make new Magician', () => {
  const realMagician = new Magician('Max');
  const expectedMagician = {
    name: 'Max',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realMagician).toEqual(expectedMagician);
});
