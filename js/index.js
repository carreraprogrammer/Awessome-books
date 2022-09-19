const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const booksList = document.getElementById('Books-List');
const parser = new DOMParser();

const booksInformation = [
    {
      title: "BookExample",
      author: "AuthorExample",
    },  
    {
      title: "BookExample2",
      author: "AuthorExample2",
    },
    {
      title: "BookExample3",
      author: "AuthorExample3",
    }
];

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


const bookString = booksInformation.map((book) => `
  <div>
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button id="remove">Remove</button>
  </div>
`)

bookString.forEach(element => {
   const bookHtml = parser.parseFromString(element, 'text/html').body.firstChild;
   booksList.append(bookHtml);
});






/* const book_list = document.createElement('div')

const Title = document.createElement('p')
Title.innerText = title.value;
Title.appendChild(book_list);

const Author = document.createElement('p')
Author.innerText = author.value;
Author.appendChild(book_list); */