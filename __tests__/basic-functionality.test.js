import {
  Zombie, Undead, Daemon, Magician, Bowerman, Swordsman,
} from '../src/index';

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
test('should handle errors', () => {
  expect(() => new Zombie('a')).toThrow(new Error("Your character's name should be between 2 and 10 letters"));
});
test('should handle errors', () => {
  expect(() => new Zombie('more-than-ten-letters')).toThrow(new Error("Your character's name should be between 2 and 10 letters"));
});
