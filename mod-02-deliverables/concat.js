//Concat

arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [7,8,9];
arr4 = [10,11,12];

const concatArr = (a,b) => [...a, ...b]

console.log('concat: ', concatArr(arr1, arr2))

const concatMultiple = (...args) => args.reduce(concatArr); 

console.log('concatMultiple: ', concatMultiple(arr1, arr2, arr3, arr4 ))