const fruits = ['Apple','Painapel','Orange'];
const foods = ['Banana','Jackfruit','Mango'];
//pop,push,concat,splice,slice,shift,unshift
let pop = fruits.pop();
console.log(pop);
console.log(fruits);

let push = fruits.push('Orange');
console.log(push);
console.log(fruits);

let add = fruits.concat(foods);
console.log(add);

let shift = fruits.shift('Banana');
console.log(shift);
console.log(fruits);

let unshift = fruits.unshift('Banana','Mango');
console.log(unshift);
console.log(fruits);

fruits.splice(2,0,fruits.concat(foods)); // 0 element remove korbe. slice from 2
console.log(fruits);


console.log(foods);
let slice = fruits.slice(1,3);
console.log(slice);
console.log(foods);




