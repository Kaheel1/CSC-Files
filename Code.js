// Single line comment
/* Multi line comment */

// This function will let us play a dice game
function playCraps(){
    // we are going to narrate what the function does through the console
    console.log("playCraps function was called")
    //Roll a dice
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);
    // Role a second die
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);
    // Add the roll together
    var sum = die1 + die2;
    console.log("The sum of the die rolls is" + sum);

    // Output the dice rolls to the html page
    document.getElementById("die1Result").innerHTML = "Die 1 is:" + die1;
    document.getElementById("die2Result").innerHTML = "Die 2 is:" + die2;
    document.getElementById("sumResult").innerHTML = "The sum is:" + sum;

    // Let's code the rules of the game
    // If the sum is 7 or 11 you've lost
    // "||" means or
    // "==" checks if the value are the same 
    if (sum == 7 || sum == 11){
        document.getElementById("crapResult").innerHTML = "You lose";

    }
    // Now lets's check if we win by rolling 2 even numbers that match
    // First we check if yhe dice are the same numbers
    // Then we check the modulus (remainder) is 0 when the die roll is divided by 2
    // Or in other words, was the die roll an even number
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapResult").innerHTML = "You win!";
    }
    // If neither of the previous if or else if statements were true, then this catch-all 
    // Else statement will be executed
    else{
        document.getElementById("crapResult").innerHTML = "You tied";
    }
}
// Create a function that generates a die roll - a random number between 1 and 6
function rollDie(){
    // Generate a random number 
    // Math.random gives us a number between 0 and 1
    var die = Math.random() * 6;
    // We get a rounded whole number that will be returned to whatever code calls the function
    return Math.ceil(die);
}