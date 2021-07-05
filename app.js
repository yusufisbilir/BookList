// Book class
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class
class UI{
    static displayBooks(){
        const storedBooks=[
            {
                title: "Book One",
                author: "John Doe",
                isbn: "123123123"
            },
            {
                title: "Book Two",
                author: "Jane Doe",
                isbn: "345345345"
            }
        ];

        const books = storedBooks;

        books.forEach(book=>{UI.addBookToList(book)});
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row  = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }
}

// Store class

// event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// event: add a book
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    // prevent actual submit
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instatiate book
    const book = new Book(title, author, isbn);

    // add book to ui
    UI.addBookToList(book);

    // clear fields
    UI.clearFields();
});


// event: remove a book