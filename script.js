let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read =!this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";  // Clear existing books before adding new ones

    for (let i = 0; i < myLibrary.length; i++) {  // Remove semicolon
        let book = myLibrary[i];

        let bookEl = document.createElement("div");
        bookEl.classList.add("book-card");  // Add a class for styling
        bookEl.setAttribute("class", "book-card");
        
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="card-body">
                <p>Pages: ${book.pages}</p>
                <p class="read-status">Read: ${book.read ? "Yes" : "No"}</p>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Mark as Read</button>
                <button class="remove-btn" onclick="removeBook(${i})">Remove Book</button>
            </div>
        `;

        libraryEl.appendChild(bookEl);
    }
}function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}


function addBookTOLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    
    render();
}

let newBookbtn = document.querySelector('#new-button-btn');
if (newBookbtn) {  // Ensure the button exists
    newBookbtn.addEventListener("click", function () {
        let newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display = "block";
    });
}

document.querySelector("#new-book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookTOLibrary();
});
