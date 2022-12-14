// Import th Books Class

import BookData from './Books.js';

// Import LocalStorage

import LocalStorage from './LocalStorage.js';

// define the base variables

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksList = document.getElementById('Books-List');
const error = document.querySelector('#error');

// Create Methods to display the Book Data

class Methods {
  static displayBooks() {
    const books = LocalStorage.getBooks();
    books.forEach((book, i) => Methods.addBookToList(book, i));
  }

  static addBookToList(book, i) {
    const booksList = document.getElementById('Books-List');
    const parser = new DOMParser();
    const bookString = `
      <div id="${i}" class="book-field-information">
        <div class="book-information"><p class="title-added">${book.title}</p>
          <p>By</p>
          <p class="author-added">${book.author}</p>
        </div>
        <div class="remove-btn-container">
         <button id="btn-${i}"class="remove">Remove</button>
        </div>
      </div>
      `;

    const bookHtml = parser.parseFromString(bookString, 'text/html').body.firstChild;

    booksList.appendChild(bookHtml);
  }

  static clearInput() {
    title.value = '';
    author.value = '';
  }

  static deleteBook(target) {
    if (target.classList.contains('remove')) {
      target.parentElement.parentElement.remove();
    }
  }
}

// Create an event to display the books

document.addEventListener('DOMContentLoaded', Methods.displayBooks);

// Create an event to Add the books

addBtn.addEventListener('click', () => {
  if (author.value.length > 0 && title.value.length > 0) {
    // Create a new Objet with the input information

    const book = new BookData(author.value, title.value);

    // Add book to UI

    Methods.addBookToList(book);

    // Add book to localStorage

    LocalStorage.addBook(book);

    // Clear Input

    Methods.clearInput();

    // Ocult error

    error.classList.add('ocult');
  } else {
    // Show error message

    error.classList.remove('ocult');
  }
});

// Create an event to remove the book

booksList.addEventListener('click', (e) => {
  // Remove the book from the list
  Methods.deleteBook(e.target);
  // Remove book from the store
  LocalStorage.removeBooks(e.target.parentElement.previousElementSibling.firstChild.textContent);
});

// Add date

function refreshTime() {
  const timeDisplay = document.getElementById('date-time');
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const dateString = new Date().toLocaleString('en-us', dateOptions);
  timeDisplay.textContent = dateString;
}

function initTime() {
  refreshTime();
  setInterval(refreshTime, 1000);
}

initTime();
