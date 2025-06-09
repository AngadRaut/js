// const array = [1,2,5,6,3];
// console.log(array);
// console.log(typeof array);
// const a = array.slice(1,3);
// console.log("slice(1,2) "+a);
// console.log("after slice array "+array);
// const a1 = array.splice(1,3);
// console.log("splice(1,2)"+a1);
// console.log("after splice array "+array);


const arr2 = ["nana","bhanu","bhai","tuka","ram"];
console.log("before splice: "+arr2);
arr2.splice(2,0,"fulwanti","hirabai");
console.log("after splice: "+arr2);

// now remove elements from array 
arr2.splice(3,3);
console.log(arr2);

// add elements in array using push method
arr2.push(11);
console.log(arr2)
console.log(arr2.pop())
console.log(arr2)

