const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
let bookTitleVar = "";

//const readInput = document.querySelector("input[name=isRead]:checked").value; - not sure if required

const displayBooksButton = document.getElementById("displayBooksButton");
const closeButton = document.getElementById("closeButton");
const updateLibraryButton = document.getElementById("updateLibraryButton");
// const removeButton = document.querySelectorAll('[data-index="[i]"]');

const addBookToLibraryButton = document.getElementById(
  "addBookToLibraryButton"
);

let mylibrary = [];

function Book(title, author, pages, isRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = id;
}

// addBookToLibraryButton.addEventListener(
//   "click",
//   function addBookToLibrary() {
//     mylibrary.push({
//       title: titleInput.value,
//       author: authorInput.value,
//       pages: pagesInput.value,
//       isRead: document.querySelector("input[name=isRead]:checked").value,
//       id: mylibrary.length + 1,
//     });
//     console.log(mylibrary);
//     document.getElementById("myForm").style.display = "none";
//   },

//   false
// );

addBookToLibraryButton.addEventListener(
  "click",
  function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let isRead = document.querySelector("input[name=isRead]:checked").value;
    let newBook = new Book(title, author, pages, isRead);
    mylibrary.push(newBook);
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

      let bookCardID = document.getElementById("bookCard");

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
      //bookCard.appendChild(bookRead);

      let bookTitleVar = mylibrary[i].title;

      //below works to remove book from array - need to add in a way to delete/remove the corresponding bookcard from view
      let removeButton = `<button type='button' class="small-button" onclick='mylibrary.splice(mylibrary.findIndex((book) => book.title === "${bookTitleVar}"), 1);document.getElementById("${[
        i,
      ]}").style.display = "none";console.log(mylibrary)'>Remove book from Library</button>`;

      let markReadButton = `<button type='button' class="small-button" onclick='markBookRead()'>Mark as Read</button>`;

      // bookCard.setAttribute("id", index);
      // bookCard.setAttribute("key", index);

      //const markReadButtonDiv = document.createElement("div");
      const removeButtonDiv = document.createElement("div");

      bookCard.appendChild(markReadButtonDiv);
      bookCard.appendChild(removeButtonDiv);

      removeButtonDiv.innerHTML = removeButton;
      markReadButtonDiv.innerHTML = markReadButton;
    }
  },
  false
);

// Add a button on each book’s display to change its read status.

//     To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// function markBookRead(Book) {
//   Book.prototype.toggleStatus = function () {
//     this.isRead = true;
//   };

//   console.log(Book.prototype);
//   console.log(mylibrary);
// }

function markBookRead(Book) {
  this.Book.call(isRead);
}

Book.prototype.toggleStatus = function () {
  this.isRead = true;
};

updateLibraryButton.addEventListener(
  "click",
  function updateLibrary() {},
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
