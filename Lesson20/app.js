const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shiyar_courses'
 }); 

 connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
    return;
  }
  console.log('Connected to MySQL database!');
});


connection.query('SELECT Name FROM course WHERE ID =? OR ID =?',[11,12], (error, results) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }
  console.log('Query results:', results);
  results.forEach(result => {
    console.log(result.Name)
  });
});


connection.end((error) => {
  if (error) {
    console.error('Error closing connection:', error);
    return;
  }
  console.log('Connection closed.');
});