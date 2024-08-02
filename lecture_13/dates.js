// dates

let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycreatedate = new Date(2000, 0, 23);
let mycreatedate_1 = new Date(2002, 11, 31);
let mycreatedate_2 = new Date(2000, 0, 23, 5, 4);

console.log(mycreatedate.toDateString());
console.log(mycreatedate_1.toDateString());

console.log(mycreatedate.toLocaleString());

let ctdate = new Date("2024-01-14");
let ctdate_1 = new Date("21-01-2014");
console.log(ctdate.toLocaleString());
console.log(ctdate_1.toLocaleString());

let crtdate = new Date(2024, 2, 8);
let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(crtdate.getTime());

console.log(Math.floor(Date.now() / 1000));
console.log(mycreatedate_1.getTime());
