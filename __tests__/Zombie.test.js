import Zombie from '../src/Zombie';

test('should create class zombie with no errors', () => {
  const zombie = new Zombie('test name');
  expect(zombie).toEqual({
    type: 'Zombie',
    name: 'test name',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test.each([
  ['a', (new Error("Your character's name should be between 2 and 10 letters"))],
  ['more-than-ten-letters', (new Error("Your character's name should be between 2 and 10 letters"))],
])('class zombie should throw an error while invalid name was passed',
  (name, expected) => {
    expect(() => new Zombie(name)).toThrow(expected);
  });
test('damage method should work correctly', () => {
  const zombie = new Zombie('test name');
  zombie.damage(40);
  expect(zombie.health).toBe(64);
});
test('method levelup should work correctly', () => {
  const zombie = new Zombie('test name');
  zombie.damage(100);
  zombie.levelUp();
  expect([zombie.level, zombie.health]).toEqual([2, 100]);
});
