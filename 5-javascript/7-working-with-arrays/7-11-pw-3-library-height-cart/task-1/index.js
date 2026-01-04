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

const booksList = document.createElement('ul');
booksList.classList.add('books-list');

btnsWrapper.append(addBookBtn, findBookBtn);
page.append(pageHeader, btnsWrapper, booksList);

function renderLibraryList(arr) {
  if (!arr || !Array.isArray(arr)) {
    return;
  }

  booksList.innerHTML = '';
  const documentFragment = document.createDocumentFragment();

  arr.forEach((book, index) => {
    const booksItem = document.createElement('li');
    booksItem.classList.add('books-item');
    booksItem.textContent = `${index + 1}) ${book}`;

    documentFragment.append(booksItem);
  });

  booksList.append(documentFragment);
}

renderLibraryList(books);

addBookBtn.addEventListener('click', () => {
  const input = prompt('Введи название книги');

  if (input === null) {
    return;
  }

  if (input.trim() === '') {
    alert('Название книги не введено!');
    return;
  }

  let bookName = input.trim().toLowerCase();
  bookName = bookName[0].toUpperCase() + bookName.slice(1);

  books.push(bookName);
  renderLibraryList(books);
});

findBookBtn.addEventListener('click', () => {
  const input = prompt('Введи название книги для поиска');

  if (input === null) {
    return;
  }

  if (input.trim() === '') {
    alert('Название книги не введено!');
    return;
  }

  // получаем все элементы и очищаем выделения если были
  const allItems = document.querySelectorAll('.books-item');
  allItems.forEach((item) => item.classList.remove('highlighted'));

  const searchName = input.trim().toLowerCase();

  const index = books.findIndex((book) =>
    book.toLowerCase().includes(searchName)
  );

  if (index !== -1) {
    allItems[index].classList.add('highlighted');
  } else {
    alert('Книга не найдена!');
  }
});
