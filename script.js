const myLibrary = [];

function Book (title, author, nbOfPages, beenRead) {
    this.title = title;
    this.author = author;
    this.nbOfPages = nbOfPages;
    this.beenRead = beenRead;
    this.id = crypto.randomUUID();
};

function addBookToLibrary (title, author, nbOfPages, beenRead) {
    let addedBook = new Book(title, author, nbOfPages, beenRead);
    myLibrary.push(addedBook);
};

const libraryContainer = document.querySelector(".library-container");

function displayLibrary () {
    cleanDisplay();
    for (let book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "card");

        const titleDiv = document.createElement("div");
        titleDiv.textContent = `Title: ${book.title}`;
        bookCard.appendChild(titleDiv);

        const authorDiv = document.createElement("div");
        authorDiv.textContent = `Author: ${book.author}`;
        bookCard.appendChild(authorDiv);

        const nbOfPagesDiv = document.createElement("div");
        nbOfPagesDiv.textContent = `Number of Pages: ${book.nbOfPages}`;
        bookCard.appendChild(nbOfPagesDiv);

        const beenReadDiv = document.createElement("div");
        beenReadDiv.textContent = `This book has ${book.beenRead?"been read":"not been read"}`;
        bookCard.appendChild(beenReadDiv);

        libraryContainer.appendChild(bookCard);
    }
}

function cleanDisplay () {
    libraryContainer.textContent = "";
}

const newBookButton = document.querySelector(".new-book-button")
const dialog = document.querySelector("dialog");
newBookButton.addEventListener("click", function(){
    dialog.showModal();
});

const addBookButton = document.querySelector("form button");
addBookButton.addEventListener("click", ()=>{
    dialog.close();
})

const newBookForm = document.querySelector("form");
newBookForm.addEventListener("submit", e=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let titleInputed = formData.get("title");
    let authorInputed = formData.get("author");
    let nbOfPagesInputed = formData.get("nbOfPages");
    let beenReadInputed = formData.get("beenRead");
    addBookToLibrary(titleInputed, authorInputed, nbOfPagesInputed, beenReadInputed);
    displayLibrary();
});