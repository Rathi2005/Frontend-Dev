
/*
  Book class with issueBook and returnBook methods.
  Manage an array of books, list available books, and issue by ISBN.
*/

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = String(ISBN);
    this.isIssued = false;
    this.issuedTo = null;
  }

  issueBook(borrowerName) {
    if (this.isIssued) {
      throw new Error(`Book "${this.title}" is already issued`);
    }
    this.isIssued = true;
    this.issuedTo = borrowerName || 'Unknown';
  }

  returnBook() {
    if (!this.isIssued) {
      throw new Error(`Book "${this.title}" is not issued`);
    }
    this.isIssued = false;
    this.issuedTo = null;
  }

  display() {
    return `${this.title} by ${this.author} [ISBN:${this.ISBN}]${this.isIssued ? ' — Issued to: ' + this.issuedTo : ' — Available'}`;
  }
}

// Sample library
const library = [
  new Book('The Pragmatic Programmer', 'Andrew Hunt', '9780201616224'),
  new Book('Clean Code', 'Robert C. Martin', '9780132350884'),
  new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509'),
  new Book('You Don\'t Know JS', 'Kyle Simpson', '9781491904244')
];

console.log('\n=== Q3 Library Management ===');

// Display available books
function listAvailableBooks() {
  const available = library.filter(b => !b.isIssued);
  console.log('\nAvailable books:');
  available.forEach(b => console.log(b.display()));
}

// Issue a book by ISBN
function issueBookByISBN(isbn, borrower) {
  const book = library.find(b => b.ISBN === String(isbn));
  if (!book) {
    console.warn('Book not found for ISBN:', isbn);
    return;
  }
  try {
    book.issueBook(borrower);
    console.log(`Issued: ${book.display()}`);
  } catch (err) {
    console.error('Issue error:', err.message);
  }
}

// Return book by ISBN
function returnBookByISBN(isbn) {
  const book = library.find(b => b.ISBN === String(isbn));
  if (!book) {
    console.warn('Book not found for ISBN:', isbn);
    return;
  }
  try {
    book.returnBook();
    console.log(`Returned: ${book.display()}`);
  } catch (err) {
    console.error('Return error:', err.message);
  }
}

// Demo flow
listAvailableBooks();
issueBookByISBN('9780132350884', 'Riya'); // issue Clean Code
listAvailableBooks();
returnBookByISBN('9780132350884');
listAvailableBooks();

// End Q3
