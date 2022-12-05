//get the players selection.
let playerSelection = (prompt("Make a choice: ")).toLowerCase();

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
let computerSelection = getComputerChoice();

//a function that plays one round.
function playOneRound(playerSelection, computerSelection){
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

