(function () {
    var name = "";
    Person = function (value, ageValue) {
        name = value;
        this.age = ageValue;
    };
    Person.prototype.getName = function () {
        return name;
    };
    Person.prototype.setName = function (value) {
        name = value;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (value) {
        this.age = value;
    };
})();

var person1 = new Person("tanrui", 10);
console.log(person1.getName());
console.log(person1.getAge());
var person2 = new Person("liyang", 20);
console.log(person1, person2);
console.log(person1.getName());
console.log(person1.getAge());
console.log(person2.getName());
console.log(person2.getAge());
