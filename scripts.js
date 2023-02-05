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
    let container = document.getElementById("displayBooksDiv");

    let bookTable = document.createElement("TABLE");

    bookTable.setAttribute("id", "bookTable");

    container.appendChild(bookTable);
  },
  false
);
