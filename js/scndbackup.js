const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksList = document.getElementById('Books-List');
const parser = new DOMParser();

class booksdata {
  booksinfo() {
    // console.log("called books data class and the info method");
    booksInformation = [];
  }
}

class Book extends booksdata {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    this.booksinfo().push(this.title.value, this.author.value);
    // this.booksInformation.push(this.title.value, this.author.value);
  }

  removeBook(i) {
    this.booksinfo().splice(i, 1);
  }
}
// let booksInformation = [];
// function BookData(title, author) {
//   this.title = title;
//   this.author = author;
// }

const showList = () => {
  booksList.innerHTML = '';

  booksdata.booksinfo().forEach((book, i) => {
    const bookString = `
          <div id="div-${i}" class="book-field-information purple">
            <div class="book-information">
              <p class="title-added">"${book.title}"</p>
              <p>By</p>
              <p class="author-added">${book.author}</p>
            </div>
            <div class="remove-btn-container">
             <button id="btn-${i}"class="remove">Remove</button>
            </div>
          </div>
          `;
        const bookString2 = `
          <div id="div-${i}" class="book-field-information white">
            <div class="book-information">
              <p class="title-added">"${book.title}"</p>
              <p>By</p>
              <p class="author-added">${book.author}</p>
            </div>
            <div class="remove-btn-container">
             <button id="btn-${i}"class="remove">Remove</button>
            </div>
          </div>
          `;
    const bookHtml = parser.parseFromString(bookString, 'text/html').body.firstChild;
    const bookHtml2 = parser.parseFromString(bookString2, 'text/html').body.firstChild;

    if (i%2 ===0 || i ===0){booksList.appendChild(bookHtml);
    }else{
      booksList.appendChild(bookHtml2);
    }
    

    // Here I will add an event for the remove button

    const remove = bookHtml.querySelector('.remove');
    remove.addEventListener('click', () => {
      document.getElementById(`div-${i}`).outerHTML = '';
      Book.removeBook(i);
      // booksInformation.splice(i, 1);
      localStorage.setItem('books', JSON.stringify(booksdata.booksinfo()));
      showList();
    });

    const remove2 = bookHtml2.querySelector('.remove');
    remove2.addEventListener('click', () => {
      document.getElementById(`div-${i}`).outerHTML = '';
      Book.removeBook(i);
      // booksInformation.splice(i, 1);
      localStorage.setItem('books', JSON.stringify(booksdata.booksinfo()));
      showList();
    });
  });
};

addBtn.addEventListener('click', (e) => {
  
  if (title.value.length > 0 && author.value.length > 0) {
    e.preventDefault();
    Book.addBook();
    // booksInformation.push(new BookData(title.value, author.value));
    title.value = '';
    author.value = '';
    showList();
    localStorage.setItem('books', JSON.stringify(booksdata.booksinfo()));
  }
});

// Local storage

if (localStorage.getItem('books') == null) {
  // booksInformation = [];
  booksdata.booksinfo();
} else {
  booksdata.booksinfo() = JSON.parse(localStorage.getItem('books'));
  showList();
}

