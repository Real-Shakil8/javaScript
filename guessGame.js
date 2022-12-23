//Create a Guessing Game using javaScript
function Guess_Game(){

    let numberOfWin = 0;
    let numberOfLost = 0;

    for(let i= 1; i <= 2; i++){

        let userInput = Math.floor(prompt('Enter a number between 0 to 9'));
        let randomNumber = Math.floor(Math.random()*1);
        
        if (userInput ==  randomNumber){
            document.write(`Congratulation! You are Win. <br/>`);
            numberOfWin++;
        }else{
            document.write(`Sorry! You are Lots. Your guess number is ${userInput} But The number was  ${randomNumber} <br/>`);
            numberOfLost++;
        };
    };
    let text1 = 'Time';
    if(numberOfLost  > 1){
        text1 = text1.replace('Time','Times');
    }
    let text2 = 'Time';
    if(numberOfWin  > 1){
        text2 = text2.replace('Time','Times');
    }
    document.write(`You Win ${text2} = ${numberOfWin} and You Lost ${text1} ${numberOfLost}`);

};
//Game End
