"use strict";
exports.__esModule = true;
function add(num) {
    return num + 2;
}
add(8);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("sada");
function signUp(name, password, isPaid) { }
signUp("mano", "spartan@123", true);
var logIn = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    //here boolean is false by default
};
logIn("mano", "spartan@123"); //taken false by default
