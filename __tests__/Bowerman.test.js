import Bowerman from '../src/Bowerman';

test('should create class bowerman with no errors', () => {
  const bowerman = new Bowerman('test name');
  expect(bowerman).toEqual({
    type: 'Bowman',
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
])('class bowerman should throw an error while invalid name was passed',
  (name, expected) => {
    expect(() => new Bowerman(name)).toThrow(expected);
  });
test('damage method should work correctly', () => {
  const bowerman = new Bowerman('test name');
  bowerman.damage(100);
  expect(bowerman.health).toBe(25);
});
test('method levelup should work correctly', () => {
  const bowerman = new Bowerman('test name');
  bowerman.damage(100);
  bowerman.levelUp();
  expect([bowerman.level, bowerman.health]).toEqual([2, 100]);
});
