//this will return a random item from the arr that contains rock, paper, and scissor.
function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    //get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);
    //get random item from the choices
    const item = choices[randomIndex];
    return item;
} 
