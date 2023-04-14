// Event                      (حدث (حدث/شيء معين يحدث 
// Emitter                                        مرسل
// EventEmitter                            مرسل الأحداث
// ----------------------------------------------------
// Emit                           (إرسال | (إطلاق الحدث
const EventEmitter = require("events");
let myEmitter = new EventEmitter();

myEmitter.on("change", function(data){
    console.log(data)
});

setInterval(() => {
   myEmitter.emit("change", new Date().toLocaleString()) 
}, 1000);

// myEmitter.on("update",(data)=>{
//     console.log("تم اطلاق الحدث", data)
// } );

// myEmitter.emit("update","Coder Shiyar")

// let listener=(data)=>{
//     console.log("تم اطلاق الحدث", data)
// };
// myEmitter.on("update",listener );

// setTimeout(() => {
//     myEmitter.removeListener("update", listener);
//     myEmitter.emit("update","test")
// }, 3000);

// myEmitter.emit("update","Coder Shiyar")
