const fruits = ['Apple', 'Banana', 'Painapel', 'Orange', 'Mango']; //arry declear
// fruits[10] = 'jackfruit';
//document.getElementById('array').innerHTML = cars;
// console.log(fruits[0]);
let fLen = fruits.length;
console.log(typeof fruits); //return object
//push array
fruits.push('Lemon');
console.log(`fruits item are `+ fruits.length);
console.log(`fruits last item is `+ fruits[fruits.length -1]);

// for loop with array
// for (i=0; i<fLen; i++){
//     console.log(fruits[i]);
// };
// console.log('for loop end');
// console.log('');

// //Array.forEach function
// function myfunction(item){
//     console.log(item);
// };
// fruits.forEach(myfunction);
// console.log('Finished');
fruits instanceof Array;