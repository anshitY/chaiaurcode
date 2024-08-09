// singleton

// object literals
const mysym = Symbol("key1");
const jsuser = {
  name: "anshit",
  age: 18,
  [mysym]: "mykey1",
  "full name": "anshit yadav",
  location: "gurgaon",
  lastlogin: ["monday", "sunday"],
};
console.log(jsuser[mysym]);
console.log(jsuser.name);
console.log(jsuser["location"]);
console.log(jsuser["full name"]);
// Object.freeze(jsuser);
// jsuser.name = "anni";
console.log(jsuser);
jsuser.greeting = function () {
  console.log("greeting");
};
console.log(jsuser.greeting());

jsuser.greeting_2 = function () {
  console.log(`hello user ${this.name}`);
};
console.log(jsuser.greeting_2());
// console.log(jsuser.full name); cant be accessed by . operator
