function highlightStockStatus(book, bookDiv) {
    if (book.in_stock === true || book.in_stock === 'true') {
        bookDiv.style.position = "relative";
        bookDiv.style.boxShadow = "0 0 15px 5px rgba(0, 255, 0, 0.4)"; // Green shadow for in-stock books
    } else {
        bookDiv.style.position = "relative";
        bookDiv.style.boxShadow = "0 0 15px 5px rgba(255, 0, 0, 0.4)"; // Red shadow for out-of-stock books
    }
}
function addHoverEffect(book, bookDiv) {
    const yearAndSummaryDiv = document.createElement('div');
    yearAndSummaryDiv.className = 'year-summary';
    yearAndSummaryDiv.textContent = `${book.year} - ${book.summary}`;
    yearAndSummaryDiv.style.display = 'none'; // Hide by default
    bookDiv.appendChild(yearAndSummaryDiv);

    bookDiv.addEventListener('mouseover', function() {
        yearAndSummaryDiv.style.display = 'block'; // Show on hover
    });

    bookDiv.addEventListener('mouseout', function() {
        yearAndSummaryDiv.style.display = 'none'; // Hide when not hovering
    });
}
