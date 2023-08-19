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

app.get('/search', async (req, res) => {
  const query = req.query.query;
  try {
      const result = await pool.query("SELECT author_name, book_name, rating FROM books WHERE in_stock='t' AND (LOWER(author_name) LIKE LOWER($1) OR LOWER(book_name) LIKE LOWER($1))", [`%${query}%`]);
      res.json(result.rows);
  } catch (err) {
      console.error("Error querying for books:", err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/categories', (req, res) => {
  const query = 'SELECT * FROM public.categories';
  pool.query(query, (error, results) => {
      if (error) {
          throw error;
      }
      res.json(results.rows);
  });
});

app.get('/booksByCategory/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const query = 'SELECT * FROM public.books WHERE category_id = $1';
  pool.query(query, [categoryId], (error, results) => {
      if (error) {
          throw error;
      }
      res.json(results.rows);
  });
});

app.get('/allbooks', (req, res) => {
  const query = 'SELECT * FROM public.books';
  pool.query(query, (error, results) => {
      if (error) {
          throw error;
      }
      res.json(results.rows);
  });
});
