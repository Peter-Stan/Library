// javascript Library
let myLibrary = [
    

];



//Books Object constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Adding books to library function
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    

}


// addBookToLibrary("The hobbit", "Tolken", 455, true);
// addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
// addBookToLibrary("1984", "George Orwell", 328, true);
// addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);


function displayBooks() {
  const container = document.getElementById('book-container');
  
  // Remove existing book cards before redrawing them
  container.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const card = document.createElement('div');
    card.classList.add('book-card');

    const title = document.createElement('h2');
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;
    card.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = 'Pages: ' + book.pages;
    card.appendChild(pages);

    const read = document.createElement('p');
    read.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');
    card.appendChild(read);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      // Remove the book from the library and redraw the book cards
      myLibrary.splice(index, 1);
      displayBooks();
    });
    card.appendChild(deleteBtn);

    container.appendChild(card);
  });
}


// Get the button and the form elements
const newBookBtn = document.getElementById('new-book-btn');
const newBookFormContainer = document.getElementById('new-book-form-container');
const newBookForm = document.getElementById('new-book-form');

// Show the new book form when the button is clicked
newBookBtn.addEventListener('click', () => {
  newBookFormContainer.style.display = 'block';
});

// Add a new book to the library when the form is submitted
newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const title = e.target.elements.title.value;
  const author = e.target.elements.author.value;
  const pages = e.target.elements.pages.value;
  const read = e.target.elements.read.checked;

  addBookToLibrary(title, author, pages, read);

  // Clear the form and hide it
  newBookForm.reset();
  newBookFormContainer.style.display = 'none';
  //newBookFormContainer.style.display = 'none';

  // Redraw the book cards with the new book added
  displayBooks();
});

