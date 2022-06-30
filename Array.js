//array -> used to store multiple values in one variable

//index    0  1   2  3  4
let arr = [10, 20, 30, 40, 20];

//length = number of values in the array
console.log(arr.length);

//values are accessed using indexes

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [];

arr2.push(2, 3, 4, 5);

console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.unshift(1);
console.log(arr2);

arr2.shift();
console.log(arr2);

//copying of an array

let arr3 = [2, 3, 4];
let arr4 = [].concat(arr3);

let arr5 = [];
for (let i = 0; i < arr3.length; i++) {
  arr5.push(arr3[i]);
}
console.log(arr5);
// arr5.push(arr3[0]);
// arr5.push(arr3[1]);
// arr5.push(arr3[2]);

//reverse

arr3.reverse();
console.log(arr3);

//includes

console.log(arr3.includes(5)); //return boolean value

//slice
//syntax arrayName.slice(startIndex, endIndex+1)
//index     0  1  2  3  4
let arr6 = [5, 6, 3, 2, 4];
let arr7 = arr6.slice(0);
console.log(arr7);

//splice - arrayName.splice(startIndex, no of values to be removed , values to be added)
//remove 6 2 3 adn add 7 8 9

let splicedValues = arr6.splice(1, 3, 7, 8, 9);
console.log(arr6, splicedValues);

/*
push
pop
shift
unshift
reverse
concat
includes
slice 
splice
*/
