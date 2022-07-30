import Magician from '../src/js/Magician';

test('Вычисление атаки с «дурманом» MathCaracter', () => {
  const mage = new Magician('mage');
  mage.attack = 100;
  mage.distance = 2;
  mage.cursed = true;
  expect(mage.attack).toBe(85);
});

test('Вычисление атаки без «дурмана»', () => {
  const mage = new Magician('mage');
  mage.attack = 100;
  mage.distance = 2;
  mage.cursed = false;
  expect(mage.attack).toBe(90);
  expect(mage.distance).toBe(2);
  expect(mage.cursed).toBe(false);
});

test('Вычисление атаки с учетом дальности без «дурмана» MathCaracter', () => {
  const mage = new Magician('mage');
  mage.attack = 100;
  mage.distance = 12;
  mage.cursed = false;
  expect(mage.attack).toBe(60);
  expect(mage.distance).toBe(12);
  expect(mage.cursed).toBe(false);
});

test('MathCaracter должен вернуть 0 атаку', () => {
  const mage = new Magician('mage');
  mage.attack = 10;
  mage.distance = 5;
  mage.cursed = true;
  expect(mage.attack).toBe(0);
  expect(mage.distance).toBe(5);
  expect(mage.cursed).toBe(true);
});
