const letter = new Set(['A', 'B', 'C', 'B', 'B', ]);
console.log(letter);
//set method
letter.add('F');
console.log(letter);
//use forEach function with set
letter.forEach(function(value){
    console.log(value);
});

console.log(letter.values());
