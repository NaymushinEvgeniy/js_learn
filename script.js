"use strict";

/* const arr = [1,2,3,6,8];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join(' ;'));