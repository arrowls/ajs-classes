import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  set attackAmmount(distance) {
    this.attack *= (10 - distance) / 10;
    if (this.stoned) {
      this.attack -= Math.log2(distance) * 5;
    }
  }

  get attackAmmount() {
    return this.attack;
  }

  set setStoned(value = false) { // на случай, если "дурман" нужно будет отменить
    this.stoned = value;
  }
}
