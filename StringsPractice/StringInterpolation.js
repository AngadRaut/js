// const name = "java script";
// const repoCount = 45;
// let value = "programming";

// // console.log(name.charAt(0));
// console.log(`this is ${name.toUpperCase()} ${value.toLocaleUpperCase()} and repoCount : ${repoCount}`);

// // 2nd way to declare strings 
// let str1 = new String('mama');
// let str1Length = str1.length;
// console.log(`str1 length :${str1Length}`);

// // string swapping using the subString method
// let str2 = 'java';
// let str3= "script";
// str3 = str2.concat(str3);
// console.log("str3 : "+str3.substring(0,4));
// console.log("str2 :"+str3.substring(4))

let str1 = "anuja shinde";
console.log(str1.slice(0,19));
console.log("when trying to fetch string with slice method containing parameters which are  out off length: "+str1.slice(289,489));

console.log("using slice: str1.slice(4,6): "+str1.slice(4,6));
console.log("str1.substring(4,6): "+str1.substring(4,6));
//  slice(): Treats negative indices as offsets from the end of the string. For instance, -1 refers to the last character, -2 to the second-to-last, and so on.
console.log(str1.substring(5,3));
console.log(str1.slice(-4,-2));  // in

// replace, replaceAll, toUpperCase
console.log(str1.splice(1,1));
