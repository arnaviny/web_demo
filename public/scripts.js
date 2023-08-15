document.addEventListener("DOMContentLoaded", function() {
    fetchBooksAndDisplay();
});

function fetchBooksAndDisplay() {
    fetch('/books')
        .then(response => {
            // ודא שהבקשה התבצעה בהצלחה
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(books => {
            const bookContainer = document.getElementById('bookContainer');

            // אם הרשימה ריקה, הצג הודעה
            if (books.length === 0) {
                bookContainer.textContent = "No books available in stock.";
                return;
            }

            books.forEach(book => {
                if(book.in_stock) {
                    const bookDiv = createBookElement(book);
                    bookContainer.appendChild(bookDiv);
                }
            });
        })
        .catch(error => console.error('Error fetching books:', error));
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

    const inStock = document.createElement('p');
    inStock.textContent = book.in_stock ? 'In Stock' : 'Out of Stock';
    bookDiv.appendChild(inStock);

    return bookDiv;
}
