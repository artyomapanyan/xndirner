const isEqual = (firstArray, secondArray) => {

let a = firstArray.toString();
let b = secondArray.toString()

if (a === b) {
  return true;
} else {
  return false
}
};
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false 