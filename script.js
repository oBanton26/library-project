const myLibrary = [];

function Book (title, author, nbOfPages) {
    this.title = title;
    this.author = author;
    this.nbOfPages = nbOfPages;
    this.id = crypto.randomUUID();
};

function addBookToLibrary (title, author, nbOfPages) {
    let addedBook = new Book(title, author, nbOfPages);
    myLibrary.push(addedBook);
};

function displayLibrary () {
    const libraryContainer = document.querySelector(".library-container");
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

        libraryContainer.appendChild(bookCard);
    }
}