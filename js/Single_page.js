function toggleClass() {
  var bookList = document.querySelector('#bookList');
  var addBooks = document.querySelector('#addBook');
  var contactinfo = document.querySelector('#contactinfo');

  var listlink = document.querySelector('#list-link');
  var addNewlink = document.querySelector('#addNew-link');
  var contactlink = document.querySelector('#contact-link');

  listlink.addEventListener('click', () => {
    if (bookList.contains("ocult")) {
      bookList.remove("ocult");
      addBooks.add("ocult");
      contactinfo.add("ocult");
    }
  });

  addNewlink.addEventListener('click', () => {
    if (addBooks.contains("ocult")) {
      addBooks.remove("ocult");
      bookList.add("ocult");
      contactinfo.add("ocult");
    }
  });

  contactlink.addEventListener('click', () => {
    if (contactinfo.contains("ocult")) {
      contactinfo.remove("ocult");
      bookList.add("ocult");
      addBooks.add("ocult");
    }
  });
}

toggleClass();