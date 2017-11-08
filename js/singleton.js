var singleton = (function () {
    var name = "tanrui";
    var age = 20;
    function setName(value) {
        name = value;
    };
    function setAge(value) {
        age = value;
    };//以上都是私有变量，只能通过特权函数获取
    return {
        //return内定义的都是singleton单例的公开变量，可直接访问修改
        sex: "man",
        setNameAndAge : function (_name, _age) {
            setName(_name);
            setAge(_age);
        },
        getNameAndAge : function () {
            return "My name is " + name + ",and I'm " + age + " years old!";
        }
    }
})();
console.log(singleton.getNameAndAge());
singleton.setNameAndAge("liyang", 19);
console.log(singleton.getNameAndAge());