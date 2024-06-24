function getComputerChoice(){
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    }
    let x=getRandomInt(1,4)
    let choice=""
    if (x==1){
        choice="rock"
    }
    else if (x==2){
        choice="paper"
    }
    else if (x==3) {
        choice="scissors"
    }
    return choice 
}
function getHumanChoice(){
    let player=prompt("Enter your choice: ").toLowerCase();
    return player
}
function playGame(){
    let compscore=0
    let playerscore=0
    let i=1
    function playRound(playerchoice,compchoice){
        let winner=0
        if (playerchoice==compchoice){
            console.log("The round is a tie.")
        }
        else if (playerchoice=="rock" && compchoice=="paper"){
            console.log("Computer wins the round!")
            winner=1
        }
        else if (playerchoice=="paper" && compchoice=="rock"){
            console.log("Player wins the round!")
        }
        else if (playerchoice=="rock" && compchoice=="scissors"){
            console.log("Player wins the round!")
            winner=2
        }
        else if (playerchoice=="scissors" && compchoice=="rock"){
            console.log("Computer wins the round!")
            winner=1
        }
        else if (playerchoice=="paper" && compchoice=="scissors"){
            console.log("Computer wins the round!")
            winner=1
        }
        else if (playerchoice=="scissors" && compchoice=="paper"){
            console.log("Player wins the round!")
            winner=2
        }
        else{
            console.log("Please input a correct choice.")
        }
        return winner
    }

    while(i<=5){
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();
        console.log("Round " + i + "/5")
        let winner=playRound(humanSelection,computerSelection)
        if(winner==1){
            compscore+=1
            i+=1
        }
        else if(winner==2){
            playerscore+=1
            i+=1
        }
        console.log("Player Score: " + playerscore)
        console.log("Computer Score: " + compscore)
    }
    if (playerscore>compscore){
        console.log("Player wins the Game!")
    }
    else if (compscore>playerscore){
        console.log("Computer wins the Game!")
    }
}
console.log("LETS PLAY ROCK PAPER SCISSORS!")
playGame()