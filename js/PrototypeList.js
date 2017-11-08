function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
}
function SubType() {
    this.subproperty = false;
}//使用构造函数创建的属性不会被下面的继承重写所覆盖
SubType.prototype.subproperty2 = true;//而这里用原型模式创建的属性无法正确访问！
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.property;
}

var instance = new SubType();
console.log(instance.subproperty);
console.log(instance.subproperty2);
console.log(instance.getSuperValue());
console.log(instance.__proto__.getSubValue());//与前一个函数作用相同


function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Person.prototype = {
    getName: function () {
        return this.name;
    }
}

function Student() {
    this.getSex = function () {
        return this.sex;
    }
}
Student.prototype.getGrade = function () {
    return this.grade;
}
Student.prototype = new Person();
Student.prototype.getGrade = function () {
    return this.grade + 10;
}

var stu = new Student("tanrui", 40, "man");
console.log(stu);