const myLibrary = [];

function Book (title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${this.read ? 'read' : 'not read yet'}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(arr) {
    const libraryDiv = document.getElementById("library");
    arr.forEach(function(book) {
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
console.log(myLibrary);
displayBooks(myLibrary);
