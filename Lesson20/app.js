const mysql = require('mysql2/promise');
let dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shiyar_courses'
 }
async function getCourses(){
  const connection = await mysql.createConnection(dbConfig); 
  let [results] = await connection.execute('SELECT * FROM course')
  results.forEach(result => {
    console.log(result.Name)
  });
  connection.end()
}getCourses()

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'shiyar_courses'
//  }); 

//  connection.connect((error) => {
//   if (error) {
//     console.error('Error connecting to MySQL database:', error);
//     return;
//   }
//   console.log('Connected to MySQL database!');
// });

// connection.query('SELECT Name FROM course WHERE ID =? OR ID =?',[11,12], (error, results) => {
//   if (error) {
//     console.error('Error executing query:', error);
//     return;
//   }
//   console.log('Query results:', results);
//   results.forEach(result => {
//     console.log(result.Name)
//   });
// });


// connection.end((error) => {
//   if (error) {
//     console.error('Error closing connection:', error);
//     return;
//   }
//   console.log('Connection closed.');
// });