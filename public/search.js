document.addEventListener("DOMContentLoaded", function() {
    // Attach event listener to the search button
    document.getElementById('searchButton').addEventListener('click', function() {
        const query = document.getElementById('searchInput').value;
        fetchBooksByQuery(query);
    });
});

function fetchBooksByQuery(query) {
    fetch(`/search?query=${query}`)
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
