import Swordsman from '../src/Swordsman';

test('should create class swordsman with no errors', () => {
  const swordsman = new Swordsman('test name');
  expect(swordsman).toEqual({
    type: 'Swordsman',
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
])('class swordsman should throw an error while invalid name was passed',
  (name, expected) => {
    expect(() => new Swordsman(name)).toThrow(expected);
  });
test('damage method should work correctly', () => {
  const swordsman = new Swordsman('test name');
  swordsman.damage(100);
  expect(swordsman.health).toBe(10);
});
test('method levelup should work correctly', () => {
  const swordsman = new Swordsman('test name');
  swordsman.damage(100);
  swordsman.levelUp();
  expect([swordsman.level, swordsman.health]).toEqual([2, 100]);
});
