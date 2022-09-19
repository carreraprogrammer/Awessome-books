const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add-btn');

const booksInformation = [];

function BookData(title, author) {
    this.title = title;
    this.author = author;
}

addBtn.addEventListener('click', () => {
    if(title.value.length > 0 && author.value.length > 0) {
        booksInformation.push(new BookData(title.value, author.value));
        title.value = "";
        author.value = "";
    } else {
       alert('Please fill the fields!') 
    }  
}
)
const book_list = document.createElement('div')

const Title = document.createElement('p')
Title.innerText = title.value;
Title.appendChild(book_list);

const Author = document.createElement('p')
Author.innerText = author.value;
Author.appendChild(book_list);