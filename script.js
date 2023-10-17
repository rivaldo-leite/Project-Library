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
const bookShelf = document.querySelector('.book-shelf');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function getTitle(library, index) {
    let titleBook = library[index].title;
    return titleBook;
}

function getAuthor(library, index) {
    let authorBook = library[index].author;
    return authorBook;
}

function getPages(library, index) {
    let pagesBook = library[index].pages;
    return pagesBook;
}

function addCard(library, index) {
    const newCard = document.createElement('div');
    newCard.classList = "card";
    const titleCard = document.createElement('p');
    titleCard.innerHTML = `Title: ${getTitle(library, index)}`;
    const authorCard = document.createElement('p');
    authorCard.innerHTML = `Author: ${getAuthor(library, index)}`;
    const pagesCard = document.createElement('p');
    pagesCard.innerHTML = `Pages: ${getPages(library, index)}`;
    const divStatus = document.createElement('div');
    divStatus.classList = 'div-status';
    const yesButton = document.createElement('button');
    yesButton.innerHTML = 'Read';
    yesButton.classList = 'btn-read';
    const noButton = document.createElement('button');
    noButton.innerHTML = 'Not Read';
    noButton.classList = 'btn-not-read';
    const removeCard = document.createElement('button');
    removeCard.classList = "remove-button";
    removeCard.innerHTML = 'X';

    newCard.appendChild(removeCard);
    newCard.appendChild(titleCard);
    newCard.appendChild(authorCard);
    newCard.appendChild(pagesCard);
    divStatus.appendChild(yesButton);
    divStatus.appendChild(noButton);
    newCard.appendChild(divStatus);
    bookShelf.appendChild(newCard);

    removeCard.addEventListener("click", () => {
        newCard.remove();
    })
}


showForm.addEventListener('click', () => {
    dialog.showModal();
});

addBook.addEventListener('click', () => {
    let titleName = document.querySelector("#title").value;
    let authorName = document.querySelector("#author").value;
    let totalPages = document.querySelector("#pages").value;
    if ((titleName.length > 0) && (authorName.length > 0) && (totalPages.length > 0)) {
        addBookToLibrary(titleName, authorName, totalPages);
        addCard(myLibrary, 0);
        myLibrary.shift();
        inputTitle.value = '';
        inputAuthor.value = '';
        inputPages.value = '';
    }
})


clearButton.addEventListener('click', () => {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
})

closeForm.addEventListener('click', () => {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    dialog.close();
})
