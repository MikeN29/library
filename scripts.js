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

/*
function book(title, author, pages, isRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = id;
}*/

class Book {
  constructor(title, author, pages, isRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
  }
}

addBookToLibraryButton.addEventListener(
  "click",
  function addBookToLibrary(book) {
    mylibrary.push({
      title: titleInput.value,
      author: authorInput.value,
      pages: pagesInput.value,
      isRead: document.querySelector("input[name=isRead]:checked").value,
      id: mylibrary.length + 1,
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

      // const element = document.getatr(`"${i}"`);

      let bookTitleVar = mylibrary[i].title;

      //below works to remove book from array - need to add in a way to delete/remove the corresponding bookcard from view
      let removeButton = `<button type='button' onclick='mylibrary.splice(mylibrary.findIndex((book) => book.title === "${bookTitleVar}"), 1);document.getElementById("${[
        i,
      ]}").style.display = "none";;console.log(mylibrary)'>Remove book from Library</button>`;

      //let removeButton = `<button type='button' onclick='removeBookFromLibrary()' class='removeBook' >Remove book from Library</button>`;

      // mylibrary.filter(book => book.title === "${bookTitleVar}").length > 0 ? container.removeChild(bookCard) : null

      bookCard.setAttribute("id", [i]);

      const removeButtonDiv = document.createElement("div");
      bookCard.appendChild(removeButtonDiv);

      removeButtonDiv.innerHTML = removeButton;
    }
  },
  false
);

//check if the index id exists in the mylibrary function - if it doesnt remove the element from the dom - if it does do nothing

// function deleteItem() {
//   const bookItem = document.getElementsByClassName("bookCard");
//   const removeButtonItem = document.getElementsByClassName("removeBook");
//   for (let i = 0; i < bookItem.length; i++) {
//     removeButtonItem[i].onclick = () => {
//       //mylibrary.splice(bookItem[i], 1);
//       bookItem[i].style.display = "none";

//       //deleteDone();
//     };
//   }
//   // for (let j = 0; j < mylibrary.length; j++) {
//   //   mylibrary.splice(
//   //     mylibrary.findIndex((book) => book.title === mylibrary[j].title),
//   //     1
//   //   );
//   // }
//   console.log(mylibrary);
// }

function removeBookFromLibrary() {
  const bookItem = document.getElementsByClassName("bookCard");
  const removeButtonItem = document.getElementsByClassName("removeBook");
  for (let i = 0; i < bookItem.length; i++) {
    removeButtonItem[i].onclick = () => {
      //mylibrary.splice(bookItem[i], 1);
      bookItem[i].style.display = "none";
      bookItem[i].classList.add("delete");

      //deleteDone();
    };

    console.log(mylibrary);
  }

  console.log(mylibrary);
}

// function deleteItem() {
//   const bookItem = document.getElementsByClassName("bookCard");
//   for (let i = 0; i < bookItem.length; i++) {
//     bookItem[i].onclick = () => {
//       //mylibrary.splice(bookItem[i], 1);
//       bookItem[i].style.display = "none";
//       //deleteDone();
//     };
//   }
// }

// function assignFunctionToRemove(e, bookTitleVar) {
//   // for (var i = 0; i < mylibrary.length; i++) {
//   //   if (mylibrary[i].title !== `'${bookTitleVar}'`) {
//   console.log(bookTitleVar);
//   //     break;
//   //   }
//   // }
// }

// function removeBookCard(bookTitleVar) {
//   //bookCards[i].remove(bookCard);
//   mylibrary.splice(
//     mylibrary.findIndex((book) => book.title === bookTitleVar),
//     1
//   );
//   // console.log("removebookcard function");
//   // if (Book.title === bookTitleVar) {
//   //   bookCards[i].remove(bookCard);
//   // }
// }

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
