import Undead from '../src/Undead';

test('should make new Undead', () => {
  const realUndead = new Undead('Lex');
  const expectedUndead = {
    name: 'Lex',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(realUndead).toEqual(expectedUndead);
});
