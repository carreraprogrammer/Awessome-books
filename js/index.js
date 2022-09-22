const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksList = document.getElementById('Books-List');

class Book {
  constructor() {
    this.booksInformation = JSON.parse(localStorage.getItem('books')) || []
  }

  addBook() {
    let book = {
      id: this.booksInformation.length, 
      title: title.value,
      author: author.value
    };
    this.booksInformation.push(book);
  }

  updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.booksInformation));
  }

  removeBook(i) {
    let newList = this.booksInformation.filter((b) => b.id !== +i[4])
    this.booksInformation = newList;
  }

  getBooks() {
    return this.booksInformation;
  }
}

let book = new Book([]);


const showList = () => {
  booksList.innerHTML = '';
  book.getBooks().forEach((b, i) => {
    booksList.innerHTML += `
    
    <div id="div-${i}" class="book-field-information purple">
            <div class="book-information">
              <p class="title-added">"${b.title}"</p>
              <p>By</p>
              <p class="author-added">${b.author}</p>
            </div>
            <div class="remove-btn-container">
             <button id="btn-${i}"class="remove">Remove</button>
            </div>
          </div>
  `
  })
};

booksList.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target.id)
  if(target.tagName === 'BUTTON') {
    book.removeBook(target.id);
    book.updateLocalStorage();
    showList();
  }
})

addBtn.addEventListener('click', (e) => {
  
  if (title.value.length > 0 && author.value.length > 0) {
    e.preventDefault();
    book.addBook();
    book.updateLocalStorage();
    title.value = '';
    author.value = '';
    showList();
  }
});

window.onload = showList();
