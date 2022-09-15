import Magician from '../src/Magician';

test('should create class magician with no errors', () => {
  const magician = new Magician('test name');
  expect(magician).toEqual({
    type: 'Magician',
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
])('class magician should throw an error while invalid name was passed',
  (name, expected) => {
    expect(() => new Magician(name)).toThrow(expected);
  });
test('damage method should work correctly', () => {
  const magician = new Magician('test name');
  magician.damage(100);
  expect(magician.health).toBe(40);
});
test('method levelup should work correctly', () => {
  const magician = new Magician('test name');
  magician.damage(100);
  magician.levelUp();
  expect([magician.level, magician.health]).toEqual([2, 100]);
});
