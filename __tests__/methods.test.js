import { Zombie } from '../src/index';

test('method damage should work correctly', () => {
  const zombie = new Zombie('test name');
  zombie.damage(30);
  expect(zombie.health).toBe(73);
});
test('method levelup should work correctly', () => {
  const zombie = new Zombie('test name');
  zombie.damage(30);
  zombie.levelUp();
  expect([zombie.health, zombie.level]).toEqual([100, 2]);
});
