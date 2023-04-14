// 1: npm install mysql
// 2: const mysql = require('mysql');
// ------------------------------------------------------------------------------ 
/* 3: To Create a Connection To Database   لإنشاء اتصال بقاعدة البيانات المحددة          
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
 }); 
 
// ------------------------------------------------------------------------------ 
// 4: Start your MySQL database                   قم بتشغيل قاعدة بيانات خاص بك
// ------------------------------------------------------------------------------ 
// 5: To make connection                          لإتصال بقاعدة البيانات المحددة 
 connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
    return;
  }
  console.log('Connected to MySQL database!');
});

// ------------------------------------------------------------------------------ 
// 6: To close the connection to a MySQL database   لإغلاق الاتصال بقاعدة البيانات
connection.end((error) => {
  if (error) {
    console.error('Error closing connection:', error);
    return;
  }
  console.log('Connection closed.');
});

// ------------------------------------------------------------------------------ 
// 7: How to execute sql commands on db   كيفية تنفيذ اوامر على قاعدة البيانات
const sql = 'SELECT * FROM tableName ';
connection.query(sql, (error, results) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }
  console.log('Query results:', results);
});

// ------------------------------------------------------------------------------ 
// 8: How to prevent SQL injection attacks - كيفية منع هجمات حقن اس كيو ال
const sql = 'SELECT * FROM tableName WHERE column1Data = ? AND column2Data > ?';
const values = [value1, value2];
connection.query(sql, values, (error, results) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }
  console.log('Query results:', results);
});
 


1- مقدمة عن MySQL وماهية قواعد البيانات:
MySQL هو نظام إدارة قواعد البيانات المفتوح المصدر
 والأكثر استخدامًا في العالم. وتعد قواعد البيانات
 من الأدوات الهامة في تخزين البيانات وتحليلها 
وإدارتها واسترجاعها. وتستخدم قواعد البيانات في مجالات
 مختلفة مثل التجارة الإلكترونية والتطبيقات الحكومية 
والتحليلات المالية والطبية والعديد من المجالات الأخرى.

 */