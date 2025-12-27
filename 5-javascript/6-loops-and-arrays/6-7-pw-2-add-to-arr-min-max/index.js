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
//
