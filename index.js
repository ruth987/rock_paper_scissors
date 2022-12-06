

//this will return a random item from the arr that contains rock, paper, and scissor.
function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    //get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);
    //get random item from the choices
    const item = choices[randomIndex];
    return item;
} 

//get the computer selection
let computerSelection = "";
let playerSelection = "";
//a function that plays one round.
function playOneRound(playerSelection, computerSelection){
    //get the players selection.
    playerSelection = (prompt("Make a choice: ")).toLowerCase();
    computerSelection = getComputerChoice();

    console.log("Your choice: "+ playerSelection);
    console.log("Computer choice: "+ computerSelection);

    if(computerSelection==playerSelection){
        return "PLAY AGAIN";
    } 
    else if(computerSelection=="rock" && playerSelection=="scissor"){
        return "You lose! Rock beats scissor.";
    }
    else if(computerSelection=="scissor" && playerSelection=="rock"){
        return "You won! Rock beats scissor.";
    }
    else if(computerSelection=="scissor" && playerSelection=="paper"){
        return "You lose! scissor beats paper.";
    }
    else if(computerSelection=="paper" && playerSelection=="scissor"){
        return "You won! scissor beats paper";
    }
    else if(computerSelection=="rock" && playerSelection=="paper"){
        return "You won! paper beats rock.";
    }
    else if(computerSelection=="paper" && playerSelection=="rock"){
        return "You lose! paper beats rock.";
    }
    else {
        return "You can only insert 'rock', 'paper' or 'scissor'!!";
    }
    
}
//important variable declaration
let human = 0;
let computer = 0;
let result = "";
let y = 5;
// a function that controls the main game
//this fucntion isnot working in the right way so it need modifications
function game(){
    for (let x = 1; x <= y; x++){
        result = playOneRound(playerSelection, computerSelection);
        if (result == "PLAY AGAIN"){
            console.log("This is not counted, play again! ");
            y+=1;
            continue
        }
        else if(result == "You lose! Rock beats scissor." || result =="You lose! scissor beats paper."||result =="You lose! paper beats rock." ){
            console.log(result);
            computer+=1;
        }
        else if(result=="You won! Rock beats scissor."||result == "You won! scissor beats paper"||result == "You won! paper beats rock."){
            console.log(result);
            human+=1;
        }
        else {
            console.log(result);
            y+=1;
            continue
        }
    }
        
    if (human > computer){
        alert("YOU WON !!! WOOOHOO CONGRA!!");
    }
    else{
        alert("SORRY BUDDY! YOU LOSE! MAYBE TRY AGAIN ?");
    }
}



