'use strict';

/*
Создайте веб-приложение «Домашняя библиотека» со следующим функционалом:
- На странице должен выводиться список книг библиотеки из массива.
- Предусмотрите возможность добавления новой книги в массив. Для этого создайте кнопку «Добавить книгу». Ввод названия книги осуществляется в окне prompt(), которое отображается при клике на кнопку добавления. Перед добавлением книги в массив обязательно сделайте проверку ввода. Если пользователь ничего не ввёл, покажите alert() с сообщением: «Название книги не введено!»
- Для поиска книги в списке создайте кнопку «Поиск», при клике на которую отображается окно ввода prompt() c вводом названия для поиска. Найденная книга в списке должна быть выделена цветом. Если книга не найдена, покажите alert() с сообщением: «Книга не найдена!»
- Выполните минимальную CSS-стилизацию DOM-элементов.
*/

const page = document.getElementById('page');
const books = [
  'Мистер и Маргарита',
  'Гарри Поттер',
  'Над пропастью во ржи',
  'Властелин колец',
  'Дюна',
  'Отцы и дети',
];

const pageHeader = document.createElement('h1');
pageHeader.classList.add('header');
pageHeader.textContent = 'Домашняя библиотека';

const btnsWrapper = document.createElement('div');
btnsWrapper.classList.add('btns-wrap');

const addBookBtn = document.createElement('button');
addBookBtn.classList.add('btn', 'add-btn');
addBookBtn.textContent = 'Добавить книгу';

const findBookBtn = document.createElement('button');
findBookBtn.classList.add('btn', 'find-btn');
findBookBtn.textContent = 'Найти';

btnsWrapper.append(addBookBtn, findBookBtn);
page.append(pageHeader, btnsWrapper);

function renderLibraryList(arr) {
  if (!arr || !Array.isArray(arr)) {
    return;
  }

  const booksList = document.createElement('ul');
  booksList.classList.add('books-list');

  for (let i = 0; i < arr.length; i++) {
    const booksItem = document.createElement('li');
    booksItem.classList.add('books-item');
    booksItem.textContent = `${i + 1}) ${arr[i]}`;

    booksList.append(booksItem);
  }

  page.append(booksList);
}

renderLibraryList(books);
