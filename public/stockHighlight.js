document.addEventListener("DOMContentLoaded", function() {
    // אין צורך להפעיל את הפונקציה כאן, היא תופעל כאשר אתה יוצר את תיבות הספרים
});

function highlightStockStatus(book, bookDiv) {
    if (book.in_stock === true || book.in_stock === 'true') {
        bookDiv.style.position = "relative";
        bookDiv.style.boxShadow = "0 0 15px 5px rgba(0, 255, 0, 0.4)"; // Green shadow for in-stock books
    } else {
        bookDiv.style.position = "relative";
        bookDiv.style.boxShadow = "0 0 15px 5px rgba(255, 0, 0, 0.4)"; // Red shadow for out-of-stock books
    }
    
}


