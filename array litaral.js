const numbers = [2,4,45,4,9,16,25];
const fruits = ['Banana','Painapel','Mango','Orange'];

function myFunction(value){
    return value > 5;
};
const result = numbers.findIndex(myFunction);
console.log(result);
