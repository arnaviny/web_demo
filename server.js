const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

// Connection to PostgreSQL
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'your_password',
  database: 'mydb',
  port: 5432
  
});

app.use(express.json());
app.use(express.static('public'));

// Fetch all books that are in stock
app.get('/books', async (req, res) => {
  try {
    const result = await pool.query("SELECT author_name, book_name, rating FROM books WHERE in_stock='t'");
    res.json(result.rows);
  } catch (err) {
    console.error("Error querying for books:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Fetch the highest rated book that's in stock
app.get('/bestbook', async (req, res) => {
  try {
    const result = await pool.query("SELECT author_name, book_name, rating FROM books WHERE in_stock='t' ORDER BY rating DESC LIMIT 1");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
