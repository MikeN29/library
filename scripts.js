const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("isRead");
const displayBooksButton = document.getElementById("displayBooksButton");
const addBookToLibraryButton = document.getElementById(
  "addBookToLibraryButton"
);

let mylibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  // this.info = function () {
  //       return title + " by " + author + ", " + pages + " pages, " + read;
  //     };
}

addBookToLibraryButton.addEventListener(
  "click",
  function addBookToLibrary() {
    mylibrary.push({
      title: titleInput.value,
      author: authorInput.value,
      pages: pagesInput.value,
      isRead: readInput.value,
    });
    console.log(mylibrary);
  },
  false
);

displayBooksButton.addEventListener(
  "click",
  function displayBooks() {
    // Write a function that loops through the array and displays each book on the page.
    // You can display them in some sort of table, or each on their own “card”.
    // It might help for now to manually add a few books to your array so you can see the display.
    /*
    let container = document.getElementById("displayBooksDiv");

    let bookCard = document.createElement("div");

    bookCard.setAttribute("id", "bookCard");
    let bookCardID = document.getElementById("bookCard");

    container.appendChild(bookCard);

    bookCard.classList.add("bookCard");

    const bookTitle = document.createElement("h3");
    bookTitle.innerText = mylibrary[0].title;

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerText = mylibrary[0].author;

    const bookPages = document.createElement("h3");
    bookPages.innerText = mylibrary[0].pages;

    const bookRead = document.createElement("h3");
    bookRead.innerText = mylibrary[0].isRead;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);

    */
    //the below works - i need to change it slightly so that a new div card is created each time
    for (var i = 0; i < mylibrary.length; i++) {
      // let container = document.getElementById("displayBooksDiv");
      // let bookCardID = document.getElementById("bookCard");
      // bookCard.classList.add("bookCard");
      // const bookTitle = document.createElement("h3");
      // bookTitle.innerText = mylibrary[i].title;
      // const bookAuthor = document.createElement("h3");
      // bookAuthor.innerText = mylibrary[i].author;
      // const bookPages = document.createElement("h3");
      // bookPages.innerText = mylibrary[i].pages;
      // const bookRead = document.createElement("h3");
      // bookRead.innerText = mylibrary[i].isRead;
      // bookCardID.appendChild(bookTitle);
      // bookCardID.appendChild(bookAuthor);
      // bookCardID.appendChild(bookPages);
      // bookCardID.appendChild(bookRead);

      let container = document.getElementById("displayBooksDiv");

      let bookCard = document.createElement("div");

      // bookCard.setAttribute("id", "bookCard");
      // let bookCardID = document.getElementById("bookCard");

      container.appendChild(bookCard);

      bookCard.classList.add("bookCard");

      const bookTitle = document.createElement("h3");
      bookTitle.classList.add("bookTitleText");
      bookTitle.innerText = mylibrary[i].title;

      const bookAuthor = document.createElement("h3");
      bookAuthor.innerText = mylibrary[i].author;

      const bookPages = document.createElement("h3");
      bookPages.innerText = mylibrary[i].pages + " pages";

      const bookRead = document.createElement("h3");
      bookRead.innerText = "Has this book been read? " + mylibrary[i].isRead;

      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookRead);
    }
  },
  false
);
