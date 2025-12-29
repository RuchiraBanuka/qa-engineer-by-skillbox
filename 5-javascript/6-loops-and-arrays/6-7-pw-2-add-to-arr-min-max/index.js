'use strict';

// Задание 1:
// Есть массив products, в котором хранится список товаров. Необходимо добавить в этот массив названия новых товаров: "Монитор", "Принтер", "Флешка" — и вывести их внутри списка ul.

const productsList = document.querySelector('.products');
const products = ['Мышка', 'Клавиатура', 'Наушники'];

products.push('Монитор', 'Принтер', 'Флешка');

const documentFragment = document.createDocumentFragment();

products.forEach((item) => {
  const productsItem = document.createElement('li');
  productsItem.classList.add('products-item');
  productsItem.textContent = item;

  documentFragment.append(productsItem);
});

productsList.append(documentFragment);

// Задание 2:
// Есть массив чисел numbers, который содержит несколько элементов. Выведите все элементы массива на странице. Также добавьте возможность находить минимальное и максимальное числа в массиве и отображать их значения на странице при нажатии соответствующих кнопок.

const allElements = document.querySelector('.all-elements');
const minBtn = document.querySelector('.min');
const maxBtn = document.querySelector('.max');
const minStrNum = document.querySelector('.minNumber');
const maxStrNum = document.querySelector('.maxNumber');

const numbers = [12, 5, 8, 20, 3, 16];
const numbersStr = numbers.join(', ');

allElements.textContent = numbersStr;

minBtn.addEventListener('click', () => {
  //   let minNum = numbers[0];
  //   for (let i = 1; i < numbers.length; i++) {
  //     if (numbers[i] < minNum) {
  //       minNum = numbers[i];
  //     }
  //   }
  //   minStrNum.textContent = minNum;

  // ?? альтернативное решение
  const minNum = Math.min(...numbers);
  minStrNum.textContent = String(minNum); // textContent и так приведёт к строке, но.. так более явно
});

maxBtn.addEventListener('click', () => {
  const maxNum = Math.max(...numbers);
  maxStrNum.textContent = String(maxNum);
});
