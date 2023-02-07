"use strict";
exports.__esModule = true;
//string
var greetings = "Hello Mano";
greetings.toLowerCase();
console.log(greetings);
//number
var userId = 989987; //type inference - TS is smart enough to know the data type
//boolean
var isLoggedIn = false;
//any keyword - not a good practice
//has by default
var hero;
function getHero() {
    return "batman";
}
hero = getHero();
