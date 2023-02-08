function add(num: number): number {
  //tells us that the output must me a number
  return num + 2; //should be
  // return "something"; //not giving me error
}

add(8);

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("sada");

function signUp(name: string, password: string, isPaid: boolean) {}

signUp("mano", "spartan@123", true);

let logIn = (name: string, password: string, isPaid: boolean = false) => {
  //here boolean is false by default
};

logIn("mano", "spartan@123"); //taken false by default

const getMessage = (msg: string): string => {
  return "this is my message";
};

const heros = ["thor", "batman", "hulk"];

heros.map((hero): string => {
  //will always returns a string as output
  return `Hero is ${hero}`;
});

function error(msg: string): void {
  console.log(msg);
}

function handleError(err: string): never {
  //termination of the process - never
  throw new Error(err);
}

export {};
