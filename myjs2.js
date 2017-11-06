function createStudent(name, score, grade) {
    var student = new Object();
    student.name = name;
    student.score = score;
    student.grade = grade;
    //工厂模式下访问器属性初始化无效
    Object.defineProperty(student, "access", {
        get:function () {
            return this.score;
        },
        set:function (score) {
            if (score<60){
                this.grade = 1;
            }
        }
    })
    return student;
}
var stu1 = createStudent("tanrui", 80, 4);
var stu2 = createStudent("liyang", 90, 5);
console.log(stu1);
console.log(stu2);
stu1.score = 50;//证明了上述
console.log(stu1);
