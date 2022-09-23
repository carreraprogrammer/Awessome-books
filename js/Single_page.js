
  var bookList = document.querySelector('#bookList');
  var addBooks = document.querySelector('#addBook');
  var contactinfo = document.querySelector('#contactinfo');

  var listlink = document.querySelector('#list-link');
  var addNewlink = document.querySelector('#addNew-link');
  var contactlink = document.querySelector('#contact-link');

  listlink.addEventListener('click', () => {
      bookList.classList.remove("ocult");
      addBooks.classList.add("ocult");
      contactinfo.classList.add("ocult");
      listlink.classList.add("purple");
      addNewlink.classList.remove("purple");
      contactlink.classList.remove("purple");
  });

  addNewlink.addEventListener('click', () => {
      addBooks.classList.remove("ocult");
      bookList.classList.add("ocult");
      contactinfo.classList.add("ocult");
      listlink.classList.remove("purple");
      addNewlink.classList.add("purple");
      contactlink.classList.remove("purple");
  });

  contactlink.addEventListener('click', () => {
      contactinfo.classList.remove("ocult");
      bookList.classList.add("ocult");
      addBooks.classList.add("ocult");
      listlink.classList.remove("purple");
      addNewlink.classList.remove("purple");
      contactlink.classList.add("purple");
  });
