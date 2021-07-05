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

        list.appendChild(row)
    }
}

// Store class

// event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)


// event: add a book

// event: remove a book