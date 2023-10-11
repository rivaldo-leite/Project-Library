const myLibrary = [];
const dialog = document.querySelector("dialog");
const showForm = document.querySelector('.new-book');
const closeForm = document.querySelector('.close-button');
const addBook = document.querySelector('#add-book');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const radioButton = document.querySelector('input[name="read-status]');
const clearButton = document.querySelector('#clear-button');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function clearRadio() {
    let readButton = document.getElementById("read");
    let notReadButton = document.getElementById("not-read");
    readButton.checked = false;
    notReadButton.checked = false;
}

showForm.addEventListener('click', () => {
    dialog.showModal();
});

addBook.addEventListener('click', () => {
    let titleName = document.querySelector("#title").value;
    let authorName = document.querySelector("#author").value;
    let totalPages = document.querySelector("#pages").value;
    let readStatus = document.querySelector('input[name="read-status"]:checked').value;
    addBookToLibrary(titleName.value, authorName, totalPages, readStatus);
    
})

clearButton.addEventListener('click', () => {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    clearRadio();
})

closeForm.addEventListener('click', () => {
    dialog.close();
})
