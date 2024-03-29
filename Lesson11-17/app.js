const express = require("express")
const bodyParser = require("body-parser")
let app = express();
app.listen(3000)

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/:name/:age", function(request, respone){
    console.log(request.params)
    respone.json({"Name": "Coder Shiyar"})
    // respone.send("مسار يعمل")
})

app.post("/api", function(request, respone){
    respone.json({"method": "post test"})
    // respone.send("مسار يعمل")
})

app.get("/", function(request, respone){  
    respone.sendFile("index.html")
    // respone.sendFile(__dirname+ "/public/index.html")
})

app.get("*",function(request, respone){  
   respone.send("صفحة لا يتواجد")
})


// Express.js, is a back end web application framework, it is
// designed for building web applications and RESTful APIs. 
// ------------------------------------------------------------------
// Express.js :         هو إطار مصمم لبناء تطبيقات الويب و إ ب ايس
// ------------------------------------------------------------------
// HTTP request methods    -    طرق للطلب وصول إلى احد موارد على نت
// ------------------------------------------------------------------ 
// GET(جلب/حصول)         Read(قراءة )              
// POST(أرسل)            Create/Update(إنشاء/ تحديث)
// PUT(ضع)               Update/Replace(تحديث او استبدال)	
// DELETE(حذف)	         Delete(حذف)
// ------------------------------------------------------------------
// Status codes:  اكواد الحالة طلب 
// 200 (OK تمام)      
// 201 (Created - تم إنشاء),
// 204 (No Content)
// 405 (Method Not Allowed - طريقة غير مسموحة)
// 307 Temporary Redirect نقل مؤقت للمصدر الذي ترغب بوصل اليه
// 308 Permanent Redirect نقل دائم للمصدر الذي ترغب بوصل اليه
// -----------------------------------------------------------------



// var bodyParser = require("body-parser");
// app.listen(3000)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function(request, respone){
//     console.log(__dirname)
//     respone.sendFile(__dirname+ "/public/index.html")
//     // respone.send("مرحبا من تطبيقي")
// })
// app.get("/contact1", function(request, respone){
//     respone.sendFile(__dirname+ "/public/contact.html")
// })
// app.get("/data", function(request, respone){
//     respone.json({"name": "Coder Shiyar"})
// })
// app.delete("/data",function(request, respone){
//     console.log(request.body)
//     respone.json({"name": "Coder Shiyar"})
// })



// GET      Read
// POST     Create
// PUT      Update/Replace	
// DELETE	Delete	
// ------------------------------
// Status codes: 
// 200 (OK)
// 201 (Created),
// 405 (Method Not Allowed)
// ------------------------------