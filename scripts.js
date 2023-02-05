const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("isRead");

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

function addBookToLibrary() {
  //add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.
  mylibrary.push({
    title: titleInput.value,
    author: authorInput.value,
    pages: pagesInput.value,
    isRead: readInput.value,
  });
  console.log(mylibrary);
}
