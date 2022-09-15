import Daemon from '../src/Daemon';

test('should create class daemon with no errors', () => {
  const daemon = new Daemon('test name');
  expect(daemon).toEqual({
    type: 'Daemon',
    name: 'test name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test.each([
  ['a', (new Error("Your character's name should be between 2 and 10 letters"))],
  ['more-than-ten-letters', (new Error("Your character's name should be between 2 and 10 letters"))],
])('class daemon should throw an error while invalid name was passed',
  (name, expected) => {
    expect(() => new Daemon(name)).toThrow(expected);
  });
test('damage method should work correctly', () => {
  const daemon = new Daemon('test name');
  daemon.damage(100);
  expect(daemon.health).toBe(40);
});
test('method levelup should work correctly', () => {
  const daemon = new Daemon('test name');
  daemon.damage(100);
  daemon.levelUp();
  expect([daemon.level, daemon.health]).toEqual([2, 100]);
});
