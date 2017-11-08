var timeId = null;
function openWithTimeOut() {
    timeId = setTimeout(function () {
        window.open("http://guitoubing.top");
    }, 3000);
};
function clearOpenTimeOut() {
    clearTimeout(timeId);
};

var num = 0, max = 3;
function alertWithInterval() {
    console.log("superman");
    num++;
    if (num < max){
        setTimeout(alertWithInterval, 500);
    }
}
setTimeout(alertWithInterval, 500);

function promptMessage() {
    var message = prompt("give me your name please:", "eg:tanrui");
    if (message!=null){
        if (confirm("you are " + message + "?")){
            alert("welcome here!" + message);
            window.print();
        }else {
            promptMessage();
        }
    }
}
function getQueryStringArgs() {
    alert(location.href);
}