import Daemon from '../src/Daemon';

test('should make new Daemon', () => {
  const realDaemon = new Daemon('Andres');
  const expectedDaemon = {
    name: 'Andres',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realDaemon).toEqual(expectedDaemon);
});
