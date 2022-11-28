let a = "Shakil";
console.log(a.length);

let text = "Real Shakil" +
" Sabuz";
console.log(text);

let x = "Real";
let y = new String("Real");
console.log(typeof x);
console.log(typeof y);
console.log(x==y);
console.log(x===y);

let nam = "banana,apple,painapel";
let result = nam.slice(13,21);
console.log(result);

let str = "I am Shakil Hossain.";
let change = str.replace("Shakil Hossain","Real Shakil");
console.log(change);

let text1 = "       Real        ";
let text2 = text1.trim();
console.log(text2); // extra space not print

let text3 = "Real Shakil";
let text4 = text3.split("");
console.log(text4);
console.log(text4[0]);

