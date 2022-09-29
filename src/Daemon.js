import Magician from './Magician';

export default class Daemon extends Magician {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
