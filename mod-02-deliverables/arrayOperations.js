//Array Opertations

const arr = [1,2,3,4,5];

const head = ([first]) => first;

console.log('Head: ',head([...arr]))

const tail = ([first, ...rest ]) => rest;  

console.log('Tail: ',tail([...arr]))

const init = (arr) => {
    arr.pop(); 
    return arr;
}  

console.log('Init: ', init([...arr]))

const last = (arr) => arr.pop(); 

console.log('Last: ', last([...arr]))
