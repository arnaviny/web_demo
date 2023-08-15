const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '234321ab', // החלף עם הסיסמה שלך
  port: 5432,
});

app.use(cors()); // מאפשר לקוד הלקוח לתקשר עם השרת
app.use(express.static('public')); // לשימוש בקבצים הסטטיים

app.get('/books', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM books');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
