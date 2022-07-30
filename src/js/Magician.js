import MathCaracter from './MathCharacter';

export default class Magician extends MathCaracter {
  constructor(name, type = 'Magician', stoned = true) {
    super(name, type, stoned);
    this.attack = 10;
    this.protection = 40;
  }
}
