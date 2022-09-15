
// selecting DOM elements
const addBook = document.querySelector('.add');
const input = document.querySelectorAll('input');
const addInfo = document.querySelector('.addinfo');
const body = document.querySelector('body');
const backgroud = document.querySelector('.background');
const section = document.querySelector('section');
const addBookForm = document.forms['form'];
const content = document.querySelector('.content');


let myLibrary = [];


class Book {
    constructor(book){
    this.title = book.title;
    this.author = book.author;
    this.pages = book.pages;
    this.read = book.read;
    }
}
    

    function addBookToLibrary(){
        const bookTitle = document.querySelector             ('#addbooktitle').value;
        const authorName = addBookForm.querySelector('#addauthorname').value;
        const addpages = addBookForm.querySelector('#addpages').value;    
        const isRead = addBookForm.querySelector('#checkbox').checked;

        let Newbook = Object.create([Book]);
        Newbook.title = bookTitle;
        Newbook.author = authorName;
        Newbook.pages = addpages;
        Newbook.read = isRead;
        myLibrary.push(Newbook);

    }

  
    function displayBookInLibrary(){

        const isRead = addBookForm.querySelector('#checkbox').checked;

        let lib = myLibrary[myLibrary.length-1];

        for (let i = myLibrary.length-1; i < myLibrary.length; i++) {
            
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book';
            const titlePar = document.createElement('p');
            const authorPar = document.createElement('p');
            const pagesPar = document.createElement('p');
            const read = document.createElement('button');
            read.className = 'book-button';
            if(lib.read === true){
                read.innerText = 'Read'
                read.style.background = '#98FB98'
            }else{
                read.innerText = 'Not Read'
                read.style.background = 'red';
            }
            const remove = document.createElement('button');
            remove.className = 'book-button';
            remove.innerText = 'Remove';

            titlePar.innerText = lib.title;
            authorPar.textContent = lib.author;
            pagesPar.textContent = lib.pages;
        
            bookDiv.appendChild(titlePar)
            bookDiv.appendChild(authorPar)
            bookDiv.appendChild(pagesPar)
            bookDiv.appendChild(read)
            bookDiv.appendChild(remove)
    
            content.appendChild(bookDiv);
            
            remove.addEventListener('click', ()=>{
                bookDiv.remove();
            })

            read.addEventListener('click', ()=>{
                if(lib.read === true){
                    read.style.background = 'red';
                    read.innerText = 'Not Read'
                    lib.read = false;

                }else{
                    read.style.background = '#98FB98';
                    read.innerText = 'Read'
                    lib.read = true;

                }
            })
        }

    }


    function reset(){
        addBookForm.reset();
    }


    addBookForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        addBookToLibrary();
        displayBookInLibrary();
    
        reset();

    })



function openAddBookWindow(){
    addBook.addEventListener('click', (e)=>{
        addInfo.style.display = 'flex';
        backgroud.style.display = 'flex';
        section.style.zIndex = '-3';
        e.stopPropagation();
        
    
        document.addEventListener('click', (e)=>{
            if(e.target === body){
                addInfo.style.display = 'none';
                backgroud.style.display = 'none';
                section.style.zIndex = '0';
                reset();
            }else{
                return;
            }
        })
    
    })
} 
openAddBookWindow();






