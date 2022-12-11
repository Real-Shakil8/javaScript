// ১ লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি 
function getRandomNumber(min,max){
    return Math.floor(Math.random() *(max - min + 1) + 1);
};
console.log(getRandomNumber(1,6));

//কিভাবে আমরা আমাদের শ্রেনীকক্ষের সকলের নাম Alphabetically সাজাতে পারি 
const studentsName = ["Shakil", "Habib", "Milon", "Julekha", "Aminur"];
console.log(studentsName.sort());

//কিভাবে আমরা আমাদের শ্রেনীরকক্ষের সকলের রোল নাম্বার ক্রম অনু্যায়ী সাজাতে পারি 
const studentsRoll = [5, 4, 3, 1, 6, 2];
console.log(studentsRoll.sort(function(a,b){
    return a - b;
}));

//কোনো সাল Leap Year কিনা তা বের করতে পারি কি ভাবে 
function isLeapYear(year){
    if(year % 400 === 0 || (year % 4 === 0 && (year % 100 !== 0))){
        console.log(`${year} is a leap year!`);
    } else {
        console.log(`${year} is not  a leap year!`);  
    }
};
isLeapYear(2016);

// কোনো sentence কত গুলো vowel আছে তা নির্নয় করা যায় কি ভাবে 
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
};
console.log(countVowels('I\'m Real Shakil'));

//কোন Array থেকে duplicate নাম্বার গুলোকে কি ভাবে বের করে আনতে পারি 
const numbers = [1, 2, 3, 2, 4, 4, 5, 6, 7, 8, 9 ,6];
const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index ;
});
console.log(duplicates);






