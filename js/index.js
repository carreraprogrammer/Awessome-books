const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksList = document.getElementById('Books-List');
const parser = new DOMParser();

let booksInformation = [];

function BookData(title, author) {
    this.title = title;
    this.author = author;
}

const showList = () => {
    
      booksList.innerHTML = '';

      booksInformation.forEach((book, i)=> {
        const bookString = `
          <div id="div-${i}">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button id="btn-${i}"class="remove">Remove</button>
          </div>
          `;

        const bookHtml = parser.parseFromString(bookString, 'text/html').body.firstChild;
        booksList.appendChild(bookHtml);

        //Here I will add an event for the remove button

        const remove = bookHtml.querySelector('.remove');
        remove.addEventListener('click', () => {
             document.getElementById(`div-${i}`).outerHTML = "";
             booksInformation.splice(i, 1);
             localStorage.setItem('books', JSON.stringify(booksInformation));
             showList();
            }   
        );
    })
 };


addBtn.addEventListener('click', (e) => {
    if(title.value.length > 0 && author.value.length > 0) {
        e.preventDefault();
         
        booksInformation.push(new BookData(title.value, author.value));
        title.value = "";
        author.value = "";
        showList();
        localStorage.setItem('books', JSON.stringify(booksInformation));
    } else {
       alert('Please fill the fields!') 
    }  
      
  }
 )


// Local storage

 if (localStorage.getItem('books') == null) {
    booksInformation = [];
 } else {
    booksInformation = JSON.parse(localStorage.getItem('books'));
    showList();
 } 

