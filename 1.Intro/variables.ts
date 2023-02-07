//string
let greetings: string = "Hello Mano";
greetings.toLowerCase();
console.log(greetings);

//number
let userId = 989987; //type inference - TS is smart enough to know the data type

//boolean
let isLoggedIn: boolean = false;

//any keyword - not a good practice
//has by default
let hero;

function getHero() {
  return "batman";
}
hero = getHero();

export {};
