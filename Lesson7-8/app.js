const fs = require("fs")

// const fs = require("fs")                         fs = File system 
// -----------------------------------------------------------------
// 1: Create files                                      إنشاء ملفات
// -----------------------------------------------------------------
// 2: Update files                                      تحديث ملفات   
// -----------------------------------------------------------------
// fs.appendFile("text.txt", "test content 2", function(){
//     console.log("File is created")
// })
// fs.writeFile("text2.txt", "test content2", function(){
//     console.log("File is created2")
// })

// 3: Read files                                        قراءة ملفات
// -----------------------------------------------------------------
fs.readFile("text2.txt","utf-8", function(error,data){
  console.log(data)
})
// 4: Delete files                                        حذف ملفات 
// -----------------------------------------------------------------
// fs.unlink("test.txt", function(error){
//     if(error){
//         throw error
//     }
//     console.log("The selected file is deleted")
// })
// 5: Rename files/folders                إعادة تسمية ملفات/مجلدات
// -----------------------------------------------------------------
fs.rename("file", "files", function(){
    console.log("The folder is renamed")
})
// 6: Read folders contant                      قراءة محتوى مجلدات 

fs.readdir("./", function(error, files){
    console.log(files)
})
// to copy files  لنسخ ملفات
fs.copyFile("text1.txt", "./files/text1.txt", ()=>{
    console.log("The file has been copied")
})
// to copy a folder  لإنشاء مجلد جديد
// fs.mkdir("./test", ()=>{

// })

// to remove an empty folder  لحذف احد مجلدات فارغة
fs.rmdir("./files", function(error){
console.log(error)
})
















// 1: Create files                   -                   إنشاء ملفات
// -------------------------------------------------------------------------------------------
// fs.appendFile() If the file does not exist, the file will be created.
// fs.appendFile('file|ملف', 'content|محتوى', function (err) {});
//                                           وظيفة يستخدم لانشاء ملف باسم ومحتوى الذي تحدده 
//                   إذا كان مسبقا يوجد ملف بنفس اسم فسيضيف محتوى الى نهاية محتوى ذلك ملف
// -------------------------------------------------------------------------------------------
// fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file, containing the specified content, will be created.
//                                           وظيفة يستخدم لانشاء ملف باسم ومحتوى الذي تحدده 
//                       إذا كان مسبقا يوجد ملف بنفس اسم فسيبدل محتوى ذلك ملف بمحتوى جديد
// -------------------------------------------------------------------------------------------
// 2: Read files                      -                                قراءة ملفات
// -------------------------------------------------------------------------------------------
// fs.readFile("file|الملف مراد قرائتها", function(err, data) {})
// fs.appendFile('fileName اسم الملف', 'FileContent محتوى الملف',function(error){});
// -------------------------------------------------------------------------------------------
// 3: Update files                   -                     تحديث ملفات    
// fs.appendFile() method appends the specified content at the end of the specified file:
//                                        وظيفة لإضافة محتوى إلى نهاية المحتوى الملف المحدد
// fs.writeFile() method replaces the specified file and content:
//                                 وظيفة لاستبدال محتوى ملف المحدد بمحتوى جديد تحددها بنفسك
// -------------------------------------------------------------------------------------------
// 4: Delete files                           -                             حذف ملفات 
// The fs.unlink() method deletes the specified file وظيفة لحذف الملف المحدد
// -------------------------------------------------------------------------------------------
// 5: Rename files - إعادة تسمية ملفات
// The fs.rename() method renames the specified file


