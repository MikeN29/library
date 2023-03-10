const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
let bookTitleVar = "";

const displayBooksButton = document.getElementById("displayBooksButton");
const closeButton = document.getElementById("closeButton");
const updateLibraryButton = document.getElementById("updateLibraryButton");

const addBookToLibraryButton = document.getElementById(
  "addBookToLibraryButton"
);

let mylibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = Math.floor(Math.random() * 10000);
}

addBookToLibraryButton.addEventListener(
  "click",
  function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let isRead = false;
    let newBook = new Book(title, author, pages, isRead);
    mylibrary.push(newBook);
    console.log(mylibrary);
    document.getElementById("myForm").style.display = "none";
  },
  false
);

Book.prototype.changeIsRead = function () {
  this.isRead = !this.isRead;
};

function changeIsRead(index) {
  mylibrary[index].changeIsRead();
  displayBooks();
  console.log(mylibrary);
}

displayBooksButton.addEventListener("click", displayBooks);

function displayBooks() {
  let libraryDiv = document.querySelector("#displayBooksDiv");
  libraryDiv.innerHTML = "";
  for (var i = 0; i < mylibrary.length; i++) {
    const container = document.getElementById("displayBooksDiv");

    const bookCard = document.createElement("div");

    container.appendChild(bookCard);

    bookCard.classList.add("bookCard");

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("bookTitleText");
    bookTitle.innerHTML = mylibrary[i].title;

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerHTML = mylibrary[i].author;

    const bookPages = document.createElement("h3");
    bookPages.innerHTML = mylibrary[i].pages + " pages";

    const bookRead = document.createElement("h3");
    bookRead.innerHTML = mylibrary[i].isRead;
    bookRead.innerHTML = mylibrary[i].isRead ? "Read" : "Not Read";

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);

    bookCard.setAttribute("id", [i]);

    const removeButtonDiv = document.createElement("div");

    let deleteBookContent = `<button type='button' class="small-button" onclick='deleteBook(${i});console.log(mylibrary)'>Remove book from Library</button>`;

    removeButtonDiv.innerHTML = deleteBookContent;

    const markReadDiv = document.createElement("div");

    let markBookReadText = document.createElement("h3");

    markReadDiv.appendChild(markBookReadText);

    let check = false;
    let inputtext = `<button class="small-button" onclick='changeIsRead(${i})' name="isRead" value="isRead" >Mark Book Read</button>`;
    markReadDiv.innerHTML = inputtext;

    bookCard.appendChild(markReadDiv);
    bookCard.appendChild(removeButtonDiv);
  }
}

// function checkedFunction() {
//   let num = 0;
//   num += 1;
//   if (Book.isRead == true) {
//     bookCard.setAttribute("class", "book-read");
//     // Book.isRead = true;
//     console.log(mylibrary);
//   } else {
//     bookCard.setAttribute("class", "book-not-read");
//     // Book.isRead = false;
//     console.log(mylibrary);
//   }
// }

function deleteBook(index) {
  mylibrary.splice(index, 1);
  displayBooks();
}

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
