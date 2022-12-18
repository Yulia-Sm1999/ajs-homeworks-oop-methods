import Bowman from '../src/Bowman';

test('should make new Bowman', () => {
  const realBowman = new Bowman('Clark');
  realBowman.levelUp();
  const expectedBowman = {
    name: 'Clark',
    type: 'Bowman',
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  };

  expect(realBowman).toEqual(expectedBowman);
});

test('should not level up the character', () => {
  const realBowman = new Bowman('Clark');
  realBowman.damage(150);
  expect(() => realBowman.levelUp()).toThrow(new Error('Нельзя повысить левел умершего!'));
});

test('should not level up the character', () => {
  const realBowman = new Bowman('Clark');
  realBowman.damage(160);
  expect(() => realBowman.damage(90)).toThrow(new Error('Уже ранен'));
});

test('should make new Bowman with damage 10', () => {
  const realBowman = new Bowman('Clark');
  realBowman.damage(10);

  expect(realBowman.health).toEqual(92.5);
});

test('should not make new Bowman because of incorrect type of character', () => {
  expect(() => new Bowman('Clark', 'Bowmans')).toThrow(new Error('Неверно выбран тип героя'));
});

test('should not make new Bowman because of incorrect number of letters in name of character', () => {
  expect(() => new Bowman({ name: 'C', type: 'Bowman' })).toThrow(new Error('Неверное количество букв в имени!'));
});
