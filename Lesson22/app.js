// How to Create and use A REST API                 كيفية إنشاء واستخدام   
// using HTML and JavaScript        بإستخدام جافا سكريبت و اتش تي ام ال 
// ----------------------------------------------------------------------
// API      vs     REST API         vs         RESTfull API
//----------------------------------------------------------------------
// CRUD: Create   Read   Update  Delete     (GET, POST, PUT, DELETE)
// npm init & npm install express body-parser mysql2 nodemon 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'App'
}); 
  
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

app.post('/users', (req, res) => {
    const { Name, Email, Password } = req.body;
    const sql = 'INSERT INTO users (Name, Email, Password) VALUES (?, ?, ?)';
    connection.query(sql, [Name, Email, Password], (err, result) => {
      if (err) return res.status(500).send({ Message: 'Error creating user', Success:false });
      res.status(201).send({ Message: 'User created successfully.' , Success:true});
    });
})

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM Users';
    connection.query(sql, (err, result) => {
      if (err) return res.status(500).send({ Message: 'Error reading user', Success:false });
      res.send(result);
    });
 });

 app.delete('/users/:Id', (req, res) => {
    const sql = 'DELETE FROM users WHERE Id = ?';
    connection.query(sql, [req.params.Id], (err, result) => {
      if (err) return res.status(500).send({ Message: 'Error deleting user', Success:false });
      res.send({ Message: 'User deleted successfully.', Success:true });
    });
});

app.put('/users/:Id', (req, res) => {
    const { Name, Email, Password } = req.body;
    const sql = 'UPDATE Users SET Name = ?, Email = ?, Password = ? WHERE Id = ?';
    connection.query(sql, [Name, Email, Password, req.params.Id], (err, result) => {
      if (err) return res.status(500).send({ Message: 'Error updating user.', Success:false });
      res.send({ Message: 'User updated successfully.', Success:true });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
