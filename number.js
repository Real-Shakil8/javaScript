let number = 349;
result = number.toString(16);
console.log(`${number} decimal is ` + result);

function num(a,b){
    let num = a;
    result = num.toString(b);
    console.log(`${num} decimal is ` + result);
}
num(349,16);

let x = 35200000;
console.log(x.toExponential(4));