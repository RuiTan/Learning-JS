var object = {
    name: "My object",
    sex: "women",
    getNameFunc: function () {
        // var that = this;
        // return function(){
            return this.name;
        // };
    }
};
Object.defineProperty(object, "getName", {
    get: function () {
        return this.name;
    },
    set: function (name) {
        if (name == "tanrui"){
            this.sex = "man";
        }
    }
});
console.log(object.getNameFunc());
console.log(object.sex);
object.name = "tanrui";
console.log(object.sex);
console.log(object.getName = "tanrui");
console.log(object.sex);
