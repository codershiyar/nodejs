// How to return html in Node.js - طريقة إعادة اتش تي ام ال في تطبيق نود جي اس
// ------------------------------------------------------------------------------------
// Static web pages                                          صفحات الويب الثابتة
// Static web pages are made of “fixed code,” 
// and unless the site developer makes changes, nothing will change on the page.
// ------------------------------------------------------------------------------------
const http = require("http")
const fs = require('fs')

http.createServer(function(request,response){
    fs.readFile("./index.html","utf-8", function(error,data ){
       response.end(data);
    })
}).listen(3000)
