//if else conditon 
let nam = 'Shanto';
if(nam == 'Shakil'){
    console.log('You are Shakil');
} else if(nam == 'Sabuz'){
    console.log('You are Sabuz');
} else if(nam == 'Shanto'){
    console.log('You are Shanto');
} else{
    console.log('Sorry...');
}

//switch statement
switch(new Date().getDay()){
    case 0:
    day = 'Sunday'; //not print
    day = 'Week start';
    break;
    case 1:
    day = 'Monday';
    break;
    case 2:
    day = 'Tuesday';
    break;
    case 3:
    day = 'Wednesday';
    break;
    case 4:
    day = 'Thursday';
    break;
    case 5:
    day = 'Friday';
    break;
    case 6:
    day = 'Saturday';
    break;
    default:
        day ='no match this line print';
}
console.log(day);

//For loop javaScript

