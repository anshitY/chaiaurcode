const name = "anshit";
const repoCount = 50;
console.log(name + repoCount + "value");
console.log(`hello my name is ${name} && repocount is ${repoCount}`);
const name_2 = new String("hitandrun");
console.log(name_2);
console.log(name_2[0]);
console.log(name_2.__proto__);
console.log(name_2.toUpperCase());
console.log(name_2.charAt(1));
console.log(name_2.indexOf("a"));
const newstr = name_2.substring(0, 3);
console.log(newstr);
const slcstr = name_2.slice(-8, 4);
console.log(slcstr);

const newStringOne = " anshit     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anshit.com/abc%20vlog";
console.log(url.replace("%20", "-"));
console.log(url.includes("anshit")); // whether this exist in url or not

const longname = new String("anshit-yadav-4th year");
console.log(longname.split("-"));
