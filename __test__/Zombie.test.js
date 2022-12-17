import Zombie from '../src/Zombie';

test('should make new Zombie', () => {
  const realZombie = new Zombie({ name: 'Beast', type: 'Zombie' });
  const expectedZombie = {
    name: 'Beast',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realZombie).toEqual(expectedZombie);
});
