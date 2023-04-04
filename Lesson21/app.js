// EJS (Embedded JavaScript) 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// استخدام body-parser لقراءة البيانات المرسلة عبر طرق POST
app.use(bodyParser.urlencoded({ extended: true }));
// معالجة طلب POST للمسار '/submit-data'
app.post('/submit-data', (req, res) => {
  res.render('response',{responseMessage: req.body});
});
app.get('/test', (req, res) => {
  res.render('conditional', { age: 14 });
});
app.get('/foreach', (req, res) => {
  res.render('foreach', { items: ['Apple', 'Banana', 'Cherry'] });
});
// تعيين ejs كمحرك القالب
app.set('view engine', 'ejs');
// استخدام مجلد "public" للملفات الثابتة
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index', { title: 'صفحة البداية', message: 'مرحبًا بكم في تطبيقنا الرائع' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`${PORT}`);});