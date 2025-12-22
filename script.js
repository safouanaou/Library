myLibrary = [];
let parentDiv = document.querySelector(".bookContainer");

//book constructor to create book objects
function Book(id, title, genre, author){
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.author = author;
};

//adding one event listener to the parent element using "Event Delegation" method so not to add multiple ones for each child element and cause memory bleeding. 
//dataset refers to any data attribute on the html elements.
parentDiv.addEventListener('click', (e)=>{
    if(e.target.classList.contains('removeBtn')){
        const index = e.target.dataset.index;
        removeBook(index);
    }
})


function addBookToLibrary(title, genre, author){


    //crypto.randomUUID() generates a random ID
    const newBook = new Book(crypto.randomUUID(), title, genre, author);

    myLibrary.push(newBook)

};

addBookToLibrary("the pragmatic programmer", "non-fiction", "unknown");
addBookToLibrary("the clean code", "non-fiction", "unknown");
addBookToLibrary("IT","horror", "Stephen King");


function displayBooks(){

    //cleaning the DOM screen to align with the Array
    parentDiv.innerHTML=``;

    myLibrary.forEach((book, index)=>{
        let card = document.createElement("div");
        card.className = "bookCard";

        card.innerHTML=`
        <h1>${book.title}</h1>
        <h2>${book.genre}</h2>
        <h3>${book.author}<h3>
        <button class="removeBtn" data-index=${index}>remove</button>
        <button class="readBtn" data-index=${index}>read</button>
        `;

        parentDiv.appendChild(card);

    }

);


    
}



function openBookForm(){
    let showFormButton = document.getElementById('showFormButton');
    let bookDialog = document.getElementById('bookDialog');
    let addBookForm = document.getElementById('addBookForm');
    let cancelButton = document.getElementById('cancelForm');
    let bookTitle = document.getElementById('title');
    let bookAuthor = document.getElementById('author');
    let bookGenre = document.getElementById('genre');
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const genre = bookGenre.value;




    showFormButton.addEventListener('click', ()=>{
        bookDialog.showModal();
    })

    addBookForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        addBookToLibrary(title, genre, author)
        displayBooks();
        
        bookDialog.close();
        addBookForm.reset();
        
        
    })

    cancelButton.addEventListener('click', ()=>{
        bookDialog.close();
        addBookForm.reset();
    })

}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}


displayBooks();
openBookForm();
