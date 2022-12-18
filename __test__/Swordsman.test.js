import Swordsman from '../src/Swordsman';

test('should make new Swordsman', () => {
  const realSwordsman = new Swordsman('Ben');
  const expectedSwordsman = {
    name: 'Ben',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realSwordsman).toEqual(expectedSwordsman);
});
