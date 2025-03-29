var myLibrary = [];
var dialogElement = document.getElementById("addBook");
var dialogTrigger = document.getElementById("dialogTrigger");
var cancelTrigger = document.getElementById("cancel");
var registerTrigger = document.getElementById("register");
var authorInput = document.getElementById("author");
var titleInput = document.getElementById("title");
var pagesInput = document.getElementById("pages");
var readInput = document.getElementById("read");
var form = document.getElementById("bookForm");
function Book(title, author, pages, read) {
    var _newTarget = this && this instanceof Book ? this.constructor : void 0;
    if (!_newTarget) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.id = crypto.randomUUID();
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.toggleRead = function () {
    this.read = !this.read;
};
function addBookToLibrary(book) {
    myLibrary.push(book);
}
function displayBooks(arr) {
    var libraryDiv = document.getElementById("library");
    arr.forEach(function (book) {
        var divEl = document.createElement("div");
        var buttonElDel = document.createElement("button");
        var buttonElToggle = document.createElement("button");
        buttonElDel.innerText = "Delete";
        buttonElToggle.innerText = "Read";
        buttonElDel.addEventListener("click", function (e) {
            myLibrary.forEach(function (libraryBook, index) {
                if (book.id == libraryBook.id) {
                    delete myLibrary[index];
                    document.getElementById("library").innerText = "";
                    displayBooks(myLibrary);
                }
            });
        });
        buttonElToggle.addEventListener("click", function (e) {
            book.toggleRead();
            document.getElementById("library").innerText = "";
            displayBooks(myLibrary);
        });
        divEl.setAttribute("book-id", book.id);
        divEl.id = "".concat(book.read ? "read" : "notread");
        var paragraphEl = document.createElement("p");
        var paragraphEl2 = document.createElement("p");
        var paragraphEl3 = document.createElement("p");
        var buttonDiv = document.createElement("div");
        buttonDiv.id = "buttonDiv";
        var h2El = document.createElement("h2");
        h2El.innerText = book.title;
        divEl.appendChild(h2El);
        paragraphEl.innerText = book.author;
        divEl.appendChild(paragraphEl);
        paragraphEl2.innerText = "Pages: ".concat(book.pages);
        divEl.appendChild(paragraphEl2);
        //paragraphEl3.innerText = book.read;
        //divEl.appendChild(paragraphEl3);
        buttonDiv.appendChild(buttonElDel);
        buttonDiv.appendChild(buttonElToggle);
        divEl.appendChild(buttonDiv);
        libraryDiv.appendChild(divEl);
    });
}
var test = new Book("The Lord of The Rings", "JRR Tolkien", 3, false);
var test2 = new Book("One Flew Over the Cuckoo's Nest", "Ken Kesey", 3, true);
var test3 = new Book("test3", "test", 3, false);
var test4 = new Book("test", "test", 3, false);
var test5 = new Book("test2", "test", 3, true);
var test6 = new Book("test3", "test", 3, true);
var test7 = new Book("test", "test", 3, false);
var test8 = new Book("test2", "test", 3, false);
var test9 = new Book("test3", "test", 3, true);
var test10 = new Book("test", "test", 3, false);
var test11 = new Book("test2", "test", 3, false);
var test12 = new Book("test3", "test", 3, true);
addBookToLibrary(test);
addBookToLibrary(test2);
addBookToLibrary(test3);
addBookToLibrary(test4);
addBookToLibrary(test5);
addBookToLibrary(test6);
addBookToLibrary(test7);
addBookToLibrary(test8);
addBookToLibrary(test9);
addBookToLibrary(test10);
addBookToLibrary(test11);
addBookToLibrary(test12);
displayBooks(myLibrary);
dialogTrigger.addEventListener("click", function () {
    dialogElement.showModal();
});
cancelTrigger.addEventListener("click", function () {
    dialogElement.close();
    form.reset();
});
registerTrigger.addEventListener("click", function (e) {
    if (authorInput.value && titleInput.value && pagesInput.value) {
        var newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
        addBookToLibrary(newBook);
        document.getElementById("library").innerText = "";
        displayBooks(myLibrary);
        form.reset();
        dialogElement.close();
    }
});
