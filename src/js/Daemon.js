import MathCaracter from './MathCaracter';

export default class Daemon extends MathCaracter {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.protection = 40;
  }
}
