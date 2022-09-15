import Undead from '../src/Undead';

test('should create class undead with no errors', () => {
  const undead = new Undead('test name');
  expect(undead).toEqual({
    type: 'Undead',
    name: 'test name',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test.each([
  ['a', (new Error("Your character's name should be between 2 and 10 letters"))],
  ['more-than-ten-letters', (new Error("Your character's name should be between 2 and 10 letters"))],
])('class undead should throw an error while invalid name was passed',
  (name, expected) => {
    expect(() => new Undead(name)).toThrow(expected);
  });
test('damage method should work correctly', () => {
  const undead = new Undead('test name');
  undead.damage(100);
  expect(undead.health).toBe(25);
});
test('method levelup should work correctly', () => {
  const undead = new Undead('test name');
  undead.damage(100);
  undead.levelUp();
  expect([undead.level, undead.health]).toEqual([2, 100]);
});
