//字面量初始化对象
// var stu = {
//     name: "tanrui",
//     _score: 80,
//     grade: 4,
// };
// Object.defineProperty(stu, "score", {
//     get:function () {
//         return this._score;
//     },
//     set:function (newScore) {
//         if (newScore<60){
//             this.grade = 1;
//         }
//     }
// });
// console.log(stu);
// stu.score = 50;
// console.log(stu);

//工厂模式创建对象
// function createStudent(name, score, grade) {
//     var student = new Object();
//     student.name = name;
//     student._score = score;
//     student.grade = grade;
//     Object.defineProperty(student, "score", {
//         get:function () {
//             return this._score;
//         },
//         set:function (score) {
//             this._score = score;
//             if (score<60){
//                 this.grade = 1;
//             }
//         }
//     })
//     return student;
// }
// var stu1 = createStudent("tanrui", 80, 4);
// var stu2 = createStudent("liyang", 90, 5);
// console.log(stu1);
// console.log(stu2);
// stu1.score = 50;
// console.log(stu1);

//构造函数模式创建对象
// function Student(name, score, grade) {
//     this.name = name;
//     this._score = score;
//     this.grade = grade;
//     Object.defineProperty(this, "score", {
//         get:function () {
//             return this._score;
//         },
//         set:function (score) {
//             this._score = score;
//             if (score<60){
//                 this.grade = 1;
//             }
//         }
//     })
//     //defineProperties会失效
//     // Object.defineProperties(this, {
//     //     name:{
//     //         value: name
//     //     },
//     //     _score:{
//     //         value: score
//     //     },
//     //     grade:{
//     //         value: grade
//     //     },
//     //     score:{
//     //         get:function () {
//     //             return this._score;
//     //         },
//     //         set:function (score) {
//     //             this._score = score;
//     //             if (score<60){
//     //               this.grade = 1;
//     //           }
//     //         }
//     //     }
//     // })
// }
// var stu2 = new Student("tanrui", 80, 4);
// var stu3 = new Student("liyang", 90, 5);
// console.log(stu2);
// console.log(stu3);
// stu2.score = 50;
// console.log(stu2);
// console.log(Object.getOwnPropertyDescriptor(stu2, "score"));


// //测试构造函数不再为global对象中能否正常工作
// function door() {
//     function Student(name, score, grade) {
//         this.name = name;
//         this.score = score;
//         this.grade = grade;
//     }
// }
// //符合常理，获取不到
// var stu = new Student("tanrui", 80, 4);
// console.log(stu);
