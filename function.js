//function javaScript
function sum(a,b){
    return a + b;
}
console.log(sum(10,5)); //call sum function

function life(name){
    console.log("Hi, "+name+" Wellcome to Here..!");
    console.log("Thank You "+name);
    return;
}
life('Real'); //call life function

// Binary function
let number = 348;
let text = number.toString(16);
console.log(text);

//Binary Function 
function convert(number,type){
    let result = number.toString(type);
    console.log(`${number} for ${result}`);
    console.log('Thank You');
}
convert(348,16);