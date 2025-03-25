const myLibrary = [];
const dialogElement = document.getElementById("addBook");
const dialogTrigger = document.getElementById("dialogTrigger");
const cancelTrigger = document.getElementById("cancel");
const registerTrigger = document.getElementById("register");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.id = crypto.randomUUID();
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  const libraryDiv = document.getElementById("library");
  arr.forEach(function (book) {
    const divEl = document.createElement("div");
    const paragraphEl = document.createElement("p");
    divEl.innerText = book.title;
    divEl.innerText += book.author;
    divEl.innerText += book.pages;
    divEl.innerText += book.read;
    libraryDiv.appendChild(divEl);
  });
}
const test = new Book("test", "test", 3, false);
const test2 = new Book("test2", "test", 3, false);
const test3 = new Book("test3", "test", 3, false);
addBookToLibrary(test);
addBookToLibrary(test2);
addBookToLibrary(test3);
displayBooks(myLibrary);

dialogTrigger.addEventListener("click", function () {
  dialogElement.showModal();
});

cancelTrigger.addEventListener("click", function () {
    dialogElement.close();
});

registerTrigger.addEventListener("click", function (e) {
  if (authorInput.value && titleInput.value && pagesInput.value) {
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );
    addBookToLibrary(newBook);
    console.log(myLibrary);
    document.getElementById("library").innerText = "";
    displayBooks(myLibrary);
    dialogElement.close();
    authorInput.value = "";
    pagesInput.value = "";
    titleInput.value = "";
    readInput.checked = false;
  }
});
