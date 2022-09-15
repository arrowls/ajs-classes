export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(
        "Your character's name should be between 2 and 10 letters",
      );
    }
    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
