
//一般情况下只有构造函数的prototype有rw权限，而实例化的对象无访问权限，特别的对于chrome、firefox、safari有_proto_属性可使实例获取rw权限
function Student() {};
Student.prototype = {
    name: "tanrui",
    score: 80,
    grade: 4,
    getName: function () {
        return this.name;
    }
};
//原型模式创建对象
var stu = new Student();
Student.prototype = {
    name: "liyang",
    score: 90,
    grade: 5,
    getName: function () {
        return this.name;
    }
};//相当于重写了原型对象，此时stu仍然指向之前的原型对象，而Student已经物是人非，创建了新的对象
var stu2 = new Student();
console.log(stu);//返回空，因为它只是一个指针
console.log(stu.__proto__);//访问prototype获取原型对象
console.log(stu2.__proto__);//证明了上述结论
// stu.prototype.grade = 1;
// console.log(stu.grade);//报错，因为实例对象无法通过prototype访问原型
stu.name = "tanrui2";
console.log(stu.name);
console.log(stu.__proto__.name);
//对于原型模式采用初始化属性时，第一个参数应为类名加prototype！！
Object.defineProperty(Student.prototype, "age", {
    value : 19
});
console.log(Student.prototype.age);

