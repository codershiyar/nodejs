// 1: Node.js routing without using Express.js   المسارات صفحات الويب
// 2: Redirect                                   إعادة توجيه المستخدم 
// 3: Status Code                                           اكواد حالة                              
const http = require("http")
const fs = require('fs')

http.createServer(function(request,response){
    let route = ""
    switch (request.url) {
        case "/":
            route = "./view/index.html"
            break;
        case "/home":
            response.statusCode = 301;
            response.setHeader("Location", "/")    
        case "/contact":
                route = "./view/contact.html"
            break;               
        default:
            response.statusCode = 404
            route = "./view/404.html"
            break;
    }
    fs.readFile(route,"utf-8", function(error,data ){
     response.end(data);
    })
}).listen(3000)
