const myLibrary: object[] = [];
const dialogElement = document.getElementById("addBook") as HTMLDialogElement;
const dialogTrigger = document.getElementById("dialogTrigger");
const cancelTrigger = document.getElementById("cancel");
const registerTrigger = document.getElementById("register");
const authorInput = document.getElementById("author") as HTMLInputElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const pagesInput = document.getElementById("pages") as HTMLInputElement;
const readInput = document.getElementById("read") as HTMLInputElement;
const form = document.getElementById("bookForm") as HTMLFormElement;

function Book(title, author, pages, read) {
  if (!new.target) {
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
  }


function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(arr) {
  const libraryDiv = document.getElementById("library");
  arr.forEach(function (book) {
    const divEl = document.createElement("div");
    const buttonElDel = document.createElement("button");
    const buttonElToggle = document.createElement("button");
    buttonElDel.innerText = "Delete";
    buttonElToggle.innerText = "Read";
    buttonElDel.addEventListener("click", function(e){
        myLibrary.forEach(function(libraryBook:{id}, index){
            if (book.id == libraryBook.id) {
                delete myLibrary[index];
                document.getElementById("library").innerText = "";
                displayBooks(myLibrary);

            }
        })
    });
    buttonElToggle.addEventListener("click", function(e) {
        book.toggleRead();
        document.getElementById("library").innerText = "";
        displayBooks(myLibrary);
    })
    divEl.setAttribute("book-id", book.id);
    divEl.id = `${ book.read ? "read" : "notread" }`
    const paragraphEl = document.createElement("p");
    const paragraphEl2 = document.createElement("p");
    const paragraphEl3 = document.createElement("p");
    const buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv";
    const h2El = document.createElement("h2");
    h2El.innerText = book.title
    divEl.appendChild(h2El);
    paragraphEl.innerText = book.author;
    divEl.appendChild(paragraphEl);
    paragraphEl2.innerText = `Pages: ${book.pages}`;
    divEl.appendChild(paragraphEl2);
    //paragraphEl3.innerText = book.read;
    //divEl.appendChild(paragraphEl3);
    buttonDiv.appendChild(buttonElDel);
    buttonDiv.appendChild(buttonElToggle);
    divEl.appendChild(buttonDiv);
    libraryDiv.appendChild(divEl);
  });
}
const test = new Book("The Lord of The Rings", "JRR Tolkien", 3, false);
const test2 = new Book("One Flew Over the Cuckoo's Nest", "Ken Kesey", 3, true);
const test3 = new Book("test3", "test", 3, false);
const test4 = new Book("test", "test", 3, false);
const test5 = new Book("test2", "test", 3, true);
const test6 = new Book("test3", "test", 3, true);
const test7 = new Book("test", "test", 3, false);
const test8 = new Book("test2", "test", 3, false);
const test9 = new Book("test3", "test", 3, true);
const test10 = new Book("test", "test", 3, false);
const test11 = new Book("test2", "test", 3, false);
const test12 = new Book("test3", "test", 3, true);
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
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );
    addBookToLibrary(newBook);
    document.getElementById("library").innerText = "";
    displayBooks(myLibrary);
    form.reset();
    dialogElement.close();
  }
});
