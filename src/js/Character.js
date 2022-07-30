export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Неверное имя');
    } else {
      this.name = name;
    }

    if (!Character.types.includes(type)) {
      throw new Error('Такого типа не существует');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
