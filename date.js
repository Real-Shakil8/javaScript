const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(d.getMonth() + 1);
console.log(d);
console.log(days[d.getDay()]);
console.log(months[d.getMonth()]);

console.log(d.setMonth(15));