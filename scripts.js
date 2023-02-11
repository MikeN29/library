const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

//const readInput = document.querySelector("input[name=isRead]:checked").value; - not sure if required

const displayBooksButton = document.getElementById("displayBooksButton");
const closeButton = document.getElementById("closeButton");
// const removeButton = document.querySelectorAll('[data-index="[i]"]');

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
  function addBookToLibrary(book) {
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
      bookCard.appendChild(bookRead);

      let bookTitleVar = mylibrary[i].title;

      //below works to remove book from array - need to add in a way to delete/remove the corresponding bookcard from view
      let removeButton = `<button type='button' onclick='mylibrary.splice(mylibrary.findIndex((book) => book.title === "${bookTitleVar}"), 1);console.log(mylibrary)'>Remove book from Library</button>`;

      //const removeButton = document.createElement("button");
      //removeButton.classList.add("removeButton");
      removeButton.textContent = "Remove book from Library";

      bookCard.setAttribute("data-index", [i]);

      //removeButton.setAttribute("data-index", [i]);
      //bookCard.appendChild(removeButton);
      bookCard.setAttribute("id", [i]);
      //removeButton.setAttribute("id", [i]);

      //removeButton.setAttribute("onclick", removeBookFromLibrary);

      //removeButton.addEventListener("click", deleteBook);

      //let closeBtn = `<button type='button' class='close-default' onclick='libraryBooks.splice(libraryBooks.findIndex((book) => book.title === "${bookTitle}" && book.author === "${bookAuthor}"), 1);'>x</button>`;
      const removeButtonDiv = document.createElement("div");
      bookCard.appendChild(removeButtonDiv);

      removeButtonDiv.innerHTML = removeButton;
    }
  },
  false
);

//loop to assign the function to remove button

// function assignFunnctionToRemove(bookTitle) {
//   const bookCardButton = document.getElementsByClassName("removeButon");
//   for (let i = 0; i < bookCardButton.length; i++) {
//     bookCardButton[i].onclick = deleteBook(bookTitle);
//   }
// }

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

//this function removes the last element from the array

function removeBookCard(bookTitle) {
  //let bookTitle = document.querySelector(".bookTitleText");
  // let i = mylibrary.findIndex((book) => book.index === id);
  // mylibrary.splice(i, 1);
  // console.log(mylibrary);
  // console.log(id);

  const bookCards = document.getElementsByClassName("bookCard");
  for (let i = 0; i < bookCards.length; i++) {
    bookCards[i].remove(bookCard);
  }
}

//now i need to remove the dom element

// function removeBookFromLibrary(mylibrary, id, i) {
//   const bookCards = document.getElementsByClassName("bookCard");
//   for (let i = 0; i < bookCards.length; i++) {
//     bookCards[i].style.backgroundColor = "red";
//   }
// }

// document.addEventListener("click", function (e) {
//   const target = e.target.closest(".removeButton"); // Or any other selector.

//   for (let i = 0; i < target.length; i++) {
//     target[i].style.backgroundColor = "red";
//   }

//   if (target) {
//     const bookCards = document.getElementsByClassName("bookCard");
//     for (let i = 0; i < bookCards.length; i++) {
//       bookCards[i].style.backgroundColor = "red";
//     }
//   }
// });

// function removeBookFromLibrary(mylibrary, id, i) {
//   //const dataIndex = document.querySelectorAll("[data-index=[i]");

//   const objWithIdIndex = mylibrary.findIndex((obj) => obj.i === i);

//   if (objWithIdIndex > -1) {
//     mylibrary.splice(objWithIdIndex, 1);
//   }

//   // return mylibrary;
//   console.log("the index is" + i);
// }
