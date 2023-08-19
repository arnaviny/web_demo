document.addEventListener("DOMContentLoaded", function() {
    fetchBooksAndDisplay();
    fetchBestRatedBook();
});

function fetchBooksAndDisplay() {
    fetch('/books')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(books => {
            const bookContainer = document.getElementById('bookContainer');
            books.forEach(book => {
                const bookDiv = createBookElement(book);
                bookContainer.appendChild(bookDiv);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
}

function fetchBestRatedBook() {
    fetch('/bestbook')
        .then(response => response.json())
        .then(book => {
            const bestBookContainer = document.getElementById('bestBookContainer');
            const bookDiv = createBookElement(book);
            bestBookContainer.appendChild(bookDiv);
        })
        .catch(error => console.error('Error fetching best-rated book:', error));
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

    return bookDiv;
}


function fetchBooksByQuery(query) {
    fetch(`/search?nameOrAuthor=${query}`)
        .then(response => response.json())
        .then(books => {
            const resultsDiv = document.getElementById('searchResults');
            resultsDiv.innerHTML = ''; // Clear previous results
            books.forEach(book => {
                const bookDiv = createBookElement(book);
                resultsDiv.appendChild(bookDiv);
            });
        })
        .catch(error => console.error('Error fetching search results:', error));
}
