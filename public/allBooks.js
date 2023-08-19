document.addEventListener("DOMContentLoaded", function() {
    fetchAllBooksAndDisplay();
});

function fetchAllBooksAndDisplay() {
    fetch('/allbooks')
        .then(response => response.json())
        .then(books => {
            const booksContainer = document.getElementById('allBooksContainer');
            books.forEach(book => {
                const bookDiv = createBookElement(book);
                booksContainer.appendChild(bookDiv);
            });
        })
        .catch(error => console.error('Error fetching all books:', error));
}

function createBookElement(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    const title = document.createElement('h3');
    title.textContent = book.book_name;
    bookDiv.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author_name}`;
    bookDiv.appendChild(author);

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${book.rating}/5`;
    bookDiv.appendChild(rating);

    // Highlight the stock status
    highlightStockStatus(book, bookDiv);
    addHoverEffect(book, bookDiv);


    return bookDiv;
}
