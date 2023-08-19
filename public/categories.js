document.addEventListener("DOMContentLoaded", function() {
    fetchCategoriesAndDisplay();
});


function fetchCategoriesAndDisplay() {
    fetch('/categories')
        .then(response => response.json())
        .then(categories => {
            const categoriesList = document.getElementById('categoriesList');
            categoriesList.innerHTML = ''; // Clear previous categories
            categories.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category clickable';
                categoryDiv.textContent = category.category_name; // Use category_name instead of name
                categoryDiv.addEventListener('click', function() {
                    fetchBooksByCategory(category.id);
                });
                categoriesList.appendChild(categoryDiv);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

function fetchBooksByCategory(categoryId) {
    fetch(`/booksByCategory/${categoryId}`)
        .then(response => response.json())
        .then(books => {
            const booksSection = document.getElementById('booksSection');
            booksSection.innerHTML = ''; // Clear previous results
            books.forEach(book => {
                const bookDiv = createBookElement(book);
                booksSection.appendChild(bookDiv);
            });
        })
        .catch(error => console.error('Error fetching books by category:', error));
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

    return bookDiv;
}

