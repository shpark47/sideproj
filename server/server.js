const express = require('express')
const pool = require('./config/db'); // 위에서 만든 db.js 불러오기
const cors = require('cors');

const app = express()
const port = 4000 

app.use(cors());
app.use(express.json());


app.get('/users', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM users');
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).son({ error: 'Database error' })))
    }
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello from backend!' });
})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}')
})