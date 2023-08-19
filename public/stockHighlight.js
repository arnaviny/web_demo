document.addEventListener("DOMContentLoaded", function() {
    // אין צורך להפעיל את הפונקציה כאן, היא תופעל כאשר אתה יוצר את תיבות הספרים
});

function highlightStockStatus(book, bookDiv) {
    if (book.in_stock === 't') {
        bookDiv.style.position = "relative";
        bookDiv.style.boxShadow = "0 0 15px 5px rgba(255, 0, 0, 0.4)"; // Green shadow
    } else {
        bookDiv.style.position = "relative";
        bookDiv.style.boxShadow = "0 0 15px 5px rgba(0, 255, 0, 0.4)"; // Red shadow
    }
}

