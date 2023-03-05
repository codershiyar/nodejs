// 1: npm vs npx 
// 2: How to create a nodejs project 
// 3: How to use npm and npx tools
// 4: How to install packages/libraries and use them in our project
// 5: How to execute packages/libraries which created to do something
// ---------------------------------------------------------------------------
// 1:                                         الفرق بين ان بي ام و ان بي اكس
// 2:                                            كيفية إنشاء مشروع نود جي اس
// 3:                                     كيفية استخدام ان بي ام و ان بي اكس
// 4: كيفية تحميل مكاتب التي تم برمجته بواسطة اخرين واستخدامها في مشروعنا
// 5:             كيفية تشغيل مكاتب الذي تم برمجته لقيام شي ما عند تشغيلها
// node package manager
// npx node package executor

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
