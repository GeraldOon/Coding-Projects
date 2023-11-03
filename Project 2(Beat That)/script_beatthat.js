// requirements of project beat that
/* there are 2 players and each take turn
    player 1 and player 2
    create two random roll dice numbers

// 
*/
// global variables
var score_compare = 'score_compare';
var allPlayersScore = []; // array to store all players score
var setPlayer = 1; // initialize to player 1
var currentPlayerroll = []; // store array for values 
var dice_roll_mode = 'dice_roll_mode';// initial roll dice state
var dice_order_mode = 'dice_order_mode'; // choose dice 
var gamestate = dice_roll_mode;
var main = function (input) {
if(gamestate == dice_roll_mode) {
     outputMessage = rollPlayerDice()
     gamestate = dice_order_mode
    }
    
if(gamestate == dice_order_mode) { // compute the total score of the string
        outputMessage = diceOrderTotal(input)
        if (setPlayer == 1){
            setPlayer = 2
            gamestate = dice_roll_mode
            return outputMessage + "<br><br> it is now player 2 turn!"
        }
        if(setPlayer == 2) {
            gamestate = score_compare
            return outputMessage + "The next submission button will compute the total scores"
        }
        
    }
       // create logic for winning game
 if(gamestate == score_compare) {
            outputMessage = winGame()
            resetGame()
            return outputMessage
        }
     }


var rollDice1 = function(){
    var diceRollVal1 
    diceRollVal1 = (Math.floor(Math.random() * 6))
    return diceRollVal1
}

var rollPlayerDice = function() {
    var count = 0
    while (count < 2) {
    currentPlayerroll.push(rollDice1())
    count = count + 1
    }
    return "Welcome Player" + setPlayer + "<br><br> You Rolled: " + currentPlayerroll[0] + " for dice 1" +  " and" + " " + currentPlayerroll[1] + " for dice 2"
}

var diceOrderTotal = function(playerInput) {
    var playerScore = 0
    if(playerInput != '1' && playerInput != '2'){
        return "Error! Please Key in Either '1' or '2' to specify your dice order.<br><br> Your dice rolls are: Dice 1: " + currentPlayerroll[0] + "| Dice 2 " + currentPlayerroll[1] + "."
    }
    if(playerInput == '1'){
        playerScore = Number(String(currentPlayerroll[0]) + String(currentPlayerroll[1]))
      
    }
    if(playerInput == '2') {
         playerScore = Number(String(currentPlayerroll[1]) + String(currentPlayerroll[0]))
    }
    allPlayersScore.push(playerScore)
    currentPlayerroll = [];
    return  "Player" + setPlayer + "Your Chosen value is:" + playerScore 


}

var winGame = function() {
    // win game when player[0] is > player[1] // player 1 wins 
        outputMessage = "Player 1 Score: " + allPlayersScore[0] + "Player 2 Score: " + allPlayersScore[1]
        if(allPlayersScore[0] > allPlayersScore[1])
        {
            outputMessage = outputMessage + 'player 1 wins'
        }
        if(allPlayersScore[0] < allPlayersScore[1]){
            outputMessage = outputMessage + 'plyaer 2 wins'
        }
        if(allPlayersScore[0] == allPlayersScore[1]) {
            outputMessage = outputMessage + "tie"
        }
    // lose game when player[0] < player[1] // player 2 wins
    return outputMessage
    // else == then it will be a tie
}

// how do i reset the game the condition is I must clear all the array values without refreshing
var resetGame = function() {
    allPlayersScore = []; // empty all players score board // current player roll values
    setPlayer = 1; // reset to player 1 
    gamestate = dice_roll_mode // change game state to roll mode

}











 
  