// primitive (reference is not provided , only copy is passed on)
// 7 types:- string , number ,boolean, null,undefined, symbol, BIG INT

// reference type (non - primitive)
// array , objects, function
const heros = ["shaktiman", "iron man", "doga"];
let obj = {
  name: "anshit",
  age: 34,
};
const myfnc = function () {
  console.log("he");
};
// javascript is dynamic language (not to explicitly state the type of data(i.e, int string, bool etc))

// symbol declare:
const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id === anotherid);

const bigNumber = 3932482374829832748234n; // declare it as big int by adding n
