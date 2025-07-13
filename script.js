/*
 * This is a simple website,
 * it allows me to pracice different concepts,
 * by, printing Hello, World!*/

//  Output Hello, World!
console.log("Hello, World!");

//  Hello world using a function:
//  1:
function helloWorld() {
  console.log("Hello, World!");
}
helloWorld();

//  2. Using a return statement:
function heloWorld(hello, world) {
  hW = hello + world;
  return hW;
}
const result = heloWorld("Hello, ", "World!");
console.log(result);

//  Using a function withhin a function:
//  1:
function fn1_1() {
  console.log("Hello, ");
  function fn1_2() {
    console.log("World!");
  }
  return fn1_2;
}
const result_2 = fn1_1();
result_2();

//  2. Using a return statement:
function fn2_1(hEllo) {
  function fn2_2(wOrld) {
    return hEllo + wOrld;
  }
  return fn2_2;
}
let result_3 = fn2_1("Hello, ");
console.log(result_3("World!"));

//  Using a for loop:
//  1:
const heLlo = "Hello, World!";
for (let i = 0; i < 5; i++) {
  console.log(heLlo);
}

//  2. Using an array in a for loop:
const helLo = ["Hello", "World"];
for (let i = 0; i < helLo.length; i++) {
  console.log(helLo[i]);
}

//  Using an object:
//  1:
const hellO = {
  aHello: "Hello",
  aWorld: "World",
};
console.log(hellO);

//  2. Using an object in a loop:
const hELlo = {
  bHello: "Hello",
  bWorld: "World",
};
for (let prop in hELlo) {
  console.log(hELlo[prop]);
}

//  Using a function in an object:
//  1.
const hELLo = {
  cHello: function hELLO() {
    console.log("Hello, World!");
  },
};
hELLo.cHello();

//  2.
const worlD = {
  dHello: function wOrld(wORld) {
    return wORld;
  },
};
let result_4 = worlD.dHello("Hello, World!");
console.log(result_4);
