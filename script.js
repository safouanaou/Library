myLibrary = [];

function Book(id, title, genre, author){
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.author = author;
};

function addBookToLibrary(title, genre, author){

    const newBook = new Book(crypto.randomUUID(), title, genre, author);

    myLibrary.push(newBook)

};

addBookToLibrary("the pragmatic programmer", "non-fiction", "unknown");
addBookToLibrary("the clean code", "non-fiction", "unknown");
addBookToLibrary("IT","horror", "Stephen King");


function displayBooks(){
    let parentDiv = document.querySelector(".bookContainer");

    for(i=0; i<myLibrary.length; i++){
        let card = document.createElement("div");
        card.className = "bookCard";
        let bookTitle = document.createElement("h1");
        let bookGenre = document.createElement("h2");
        let bookAuthor = document.createElement("h3");

        bookTitle.textContent = myLibrary[i].title;
        bookGenre.textContent = myLibrary[i].genre;
        bookAuthor.textContent = myLibrary[i].author;

        card.append(bookTitle, bookGenre, bookAuthor);

        parentDiv.appendChild(card);

    }
    
}

displayBooks()

let showFormButton = document.getElementById('showFormButton');
let bookDialog = document.getElementById('bookDialog');
let addBookForm = document.getElementById('addBookForm');


showFormButton.addEventListener('click', ()=>{
    bookDialog.showModal();
})

