document.addEventListener("DOMContentLoaded", function() {
    highlightStockStatus();
});

function highlightStockStatus() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const inStock = book.getAttribute('data-in-stock');
        if (inStock === "true") {
            book.classList.add('in-stock');
        } else {
            book.classList.add('out-of-stock');
        }
    });
}
