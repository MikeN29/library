const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

//const readInput = document.querySelector("input[name=isRead]:checked").value; - not sure if required

const displayBooksButton = document.getElementById("displayBooksButton");
const closeButton = document.getElementById("closeButton");

const addBookToLibraryButton = document.getElementById(
  "addBookToLibraryButton"
);

let mylibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

addBookToLibraryButton.addEventListener(
  "click",
  function addBookToLibrary() {
    mylibrary.push({
      title: titleInput.value,
      author: authorInput.value,
      pages: pagesInput.value,
      isRead: document.querySelector("input[name=isRead]:checked").value,
    });
    console.log(mylibrary);
    document.getElementById("myForm").style.display = "none";
  },

  false
);

displayBooksButton.addEventListener(
  "click",
  function displayBooks() {
    //the below works - i need to change it slightly so that a new div card is created each time
    for (var i = 0; i < mylibrary.length; i++) {
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
      bookRead.innerText = mylibrary[i].isRead;

      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookRead);
    }
  },
  false
);

openFormButton.addEventListener(
  "click",
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  },
  false
);

closeButton.addEventListener(
  "click",
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  },
  false
);
