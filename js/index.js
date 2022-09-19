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
    } else {
       alert('Please fill the fields!') 
    }
}
)
