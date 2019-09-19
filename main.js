//function checkName() {
//    var urlString = window.location.search;
//    var fname = urlString.search("fname") + 6;
//    var lname = urlString.search("lname") - 1;
//    urlString = urlString.split("");
//    var name = "";
//    for (var i = fname; i < lname; i++) {
//        name = name + urlString[i];
//    }

//    document.getElementById("thname").innerHTML = name;
//}


//function uname() {

//    var fname = document.getElementById('fname').value;
//    console.log(fname);

//    localStorage.setItem("username", fname);
//}

function cname() {
    var fname = document.getElementById('fname').value;
    document.cookie = "name=; expires=Thu, 10 Dec 2000 12:00:00 UTC;";
    document.cookie = "name=" + fname + ";path=/";
}

function ftelling(){
    var bdate = new Date(date.value);
    var msg;
    switch (bdate.getMonth()) {
        case 0:
            msg = 'message for ' + 1;
            break;
        case 1:
            msg = 'message for ' + 2;
            break;
        case 2:
            msg = 'message for ' + 3;
            break;
        case 3:
            msg = 'message for ' + 4;
            break;
        case 4:
            msg = 'message for ' + 5;
            break;
        case 5:
            msg = 'message for ' + 6;
            break;
        case 6:
            msg = 'message for ' + 7;
            break;
        case 7:
            msg = 'message for ' + 8;
            break;
        case 8:
            msg = 'message for ' + 9;
            break;
        case 9:
            msg = 'message for ' + 10;
            break;
        case 10:
            msg = 'message for ' + 11;
            break;
        case 11:
            msg = 'message for ' + 12;
            break;
        default:
            msg = 'invalid date';
    }

    res6.innerHTML = msg;
}
function rollTheDice() {

    let roll1 = parseInt(Math.random() * 6 + 1);
    let roll2 = parseInt(Math.random() * 6 + 1);

    res7.innerHTML = roll1;
    res72.innerHTML = roll2;
}
function Average() {
    //var num1 = prompt("Please enter the first score", "");
    //var num2 = prompt("Please enter the second score", "");
    //var num3 = prompt("Please enter the third score", "");
    //num1 = parseInt(num1);
    //num2 = parseInt(num2);
    //num3 = parseInt(num3);
    //var Average = (num1 + num2 + num3) / 3;
    //alert("The average is " + Average);

    var total = 0;
    for (var i = 0; i < 3; i++) {
        total += parseInt(prompt("Please enter the next score", ""));
    }
    alert("The average of 5, 4, 6 is " + total/3);
}
function Adv() {
    var num1 = parseInt(document.getElementById("frm").elements[0].value);
    var num2 = parseInt(document.getElementById("frm").elements[1].value);
    var num3 = parseInt(document.getElementById("frm").elements[2].value);
    var Average = (num1 + num2 + num3) / 3;
    res2.innerHTML = "The student's average is: " + Average.toFixed(2);
}

function date() {
    res3.innerHTML = new Date();
}

var num = 10000000;
function prime() {
    var prime = false;
    while (prime == false) {
        num += 1;
        prime = true;
        for (i = 2; i < num; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
    }
    res4.innerHTML = num;
}

var num1 = 0;
var num2 = 1;
var num3 = 0;
function fib() {
    num1 = num2;
    num2 = num3;
    num3 = num2 + num1;
    res5.innerHTML = num3;
}

function Count() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "No. of clicks: " + localStorage.clickcount;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


var w;
function ww() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("timer.js");
        }
        w.onmessage = function (event) {
            document.getElementById("result2").innerHTML = event.data / 100;
        };
    } else {
        document.getElementById("result2").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}


function Location() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        document.getElementById("result3").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("result3").innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("nabil", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("nabil");
    ev.target.appendChild(document.getElementById(data));
}

