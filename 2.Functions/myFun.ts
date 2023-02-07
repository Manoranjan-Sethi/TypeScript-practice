function add(num: number) {
  return num + 2;
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

export {};
