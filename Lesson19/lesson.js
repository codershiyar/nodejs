// Event                      (حدث (حدث/شيء معين يحدث 
// Emitter                                        مرسل
// EventEmitter                            مرسل الأحداث
// ----------------------------------------------------
//    استدعاء مكتبة جاهزة في نود جي اس لصناعة احداث
// -------------------------1--------------------------
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();


// // ---------------إضافة مستمع للأحداث-----------------
// myEmitter.on('event_name', () => {
//     console.log('تم تفعيل الحدث event_name!');
// });
// // ---------------إصدار حدث----------------
// myEmitter.emit('event_name');
// // إضافة مستمع للحدث لمرة واحدة
// myEmitter.once('single_event', () => {
//     console.log('تم تفعيل الحدث single_event لمرة واحدة فقط!');
// });

// // إزالة مستمع الأحداث
// const myListener = () => {
//     console.log('تم تفعيل الحدث event_name!');
// };
  
//   myEmitter.on('event_name', myListener);
//   myEmitter.removeListener('event_name', myListener);

//   // الحصول على عدد المستمعين لحدث معين:
//   const listenerCount = myEmitter.listenerCount('event_name');
//   console.log(`عدد المستمعين للحدث event_name هو: ${listenerCount}`);

//   // إضافة مستمع بدون تحديد الحد الأقصى لعدد المستمعين:
//   myEmitter.setMaxListeners(0); // يمكنك استبدال الرقم 0 بالعدد المطلوب للمستمعين.
//  // رفع حدث خطأ:
//   myEmitter.on('error', (error) => {
//     console.error(`حدث خطأ: ${error.message}`);
//   });
// // إزالة جميع المستمعين للأحداث:
// myEmitter.removeAllListeners('event_name');

// // تمرير المعلمات للمستمعين:
// myEmitter.on('greet', (name) => {
//     console.log(`مرحبًا, ${name}!`);
//   });
  
//   myEmitter.emit('greet', 'شيار');

//   // استخدام الوظيفة prependListener:
// //   يمكنك استخدام الوظيفة prependListener لإضافة مستمع جديد إلى بداية المستمعين الموجودين بالفعل للحدث المعين:

// myEmitter.prependListener('event_name', () => {
//     console.log('تم إضافة المستمع إلى بداية المستمعين للحدث event_name');
//   });
  
// الحصول على قائمة المستمعين لحدث معين:
// يمكنك الحصول على قائمة المستمعين المسجلين لحدث معين بواسطة الوظيفة listeners:

// const listeners = myEmitter.listeners('event_name');
// console.log(`قائمة المستمعين للحدث event_name: ${listeners}`);












