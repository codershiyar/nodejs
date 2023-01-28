// module
// --------------------------------------1---------------------------------------------------------------------------
// var http = require('http');  allows Node.js to transfer data over the HTTP Protocol
//                                                       يسمح ل نودجي اس بنقل البيانات عبر بروتوكول اتش تي تي بي
// ------------------------------------------------------------------------------------------------------------------
// Use the createServer() method to create an HTTP server        استخدمها لإنشاء سيرفر يمكنه تلقي بيانات او إعادته
// ------------------------------------------------------------------------------------------------------------------
// response.write()to write the content of response.        لكتابة  المحتوى الرد عندما يطلب احد وصول إلى السيرفر
// response.end()    to define the end of response.                                          لتحديد النهاية استجابة
// Use listen() To specify a server listens to which (port, hostname) 
//                                                               استخدمها لتحديد خادم يستمع إلى أي (منفذ،اسم مضيف)

var http = require("http");
let port = 80;
let hostname = "localhost"
let server = http.createServer(function(request,response){
       // console.log(request)
       response.writeHead(200,"ok",{"Content-Type":"text/html;charset=utf-8"})
       response.write("<h2> Test</h2>");
       response.end();
});

server.listen(port,hostname, function(){
      console.log("http://"+ hostname+":"+port)
})


var http2 = require("http");
let port2 = 100;
let hostname2 = "localhost"
let server2 = http2.createServer(function(request,response){
       // console.log(request)
       response.writeHead(200,"ok",{"Content-Type":"text/html;charset=utf-8"})
       response.write(``);
       response.end();
});

server2.listen(port2,hostname2, function(){
      console.log("http://"+ hostname2+":"+port2)
})

// ------------------------------------------------------------2-----------------------------------------------------
// response.writeHead(statusCode, statusMessage, headers);         لكتابة نوع الجواب مثل نوع  البيانات او كود الخ
// statusCode <number>: It accepts the status codes that are of number type.         يقبل رموز الحالة من نوع الرقم
// statusMessage <string>: It accepts any string that shows the status message.       يقبل أي نص تظهر رسالة الحالة
// headers <Object>: It accepts headers as object {"type": "value"}.
//    يستخدم لتحديد امور للمتصفح الذي قام مستخدم من خلاله بإرسال الطلب مثل ماهو نوع البيانات الذي قمت بإعادته  
// -------------------------------------------------------------3---------------------------------------------------
// HTTP headers
// 1: 'Content-Type': 'text/html'         to return result as HTML content      لإرجاع النتيجة كمحتوى اتش تي ام ال
// 2: 'Content-Type': 'application/json'  to return result as JSON     لإرجاع النتيجة كمحتوى من نوع بيانات جي سو ن
// 3: 'Content-Type': 'text/plain'        to return result as string   لإرجاع النتيجة كمحتوى من نوع البيانات النصي
 
// 4: charset=utf-8
