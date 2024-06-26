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
        document.getElementById("crapsResult").innerHTML = "You lose";

    }
    // Now lets's check if we win by rolling 2 even numbers that match
    // First we check if yhe dice are the same numbers
    // Then we check the modulus (remainder) is 0 when the die roll is divided by 2
    // Or in other words, was the die roll an even number
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsResult").innerHTML = "You win!";
    }
    // If neither of the previous if or else if statements were true, then this catch-all 
    // Else statement will be executed
    else{
        document.getElementById("crapsResult").innerHTML = "You tied";
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

function validateForm(){
    // Get the first name that the user entered on the form
    var firstName = document.getElementById("fname").value
    // Get the last name that the user entered on the form
    var lastName = document.getElementById("lname").value
    // Get the zipcode the user entered on the form
    var zipCode = document.getElementById("zip").value

    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Zip Code: " + zipCode);

    // create a variable to hold firstName + space + lastName
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);
    
    // Do the input validation
    // Wewill check for more than 20 letters in the first and last names or if no names were entered, the length will be 1 because of the space we add between the first and last name
    if(fullName.length > 20 || fullName.length == 1){
        console.log("Invalid name");
        // Let the user know they did not enter the information correctly
        alert("Please enter a name that is shorter than 20 characters");
        // Make sure the form does not sumit
        return false;
    }
    else if(zipCode.length != 5){
        console.log("Invalid zip code");
        // Let the user know they did not enter the zip code correctly
        alert("Zip code was not 5 digits. Please try again.");
         return false;
    }
    else{
        // The passed validation! Releasethe secret word
        console.log("We are good to go.");
        alert("That's mine now! No take backs.");
        return true;
    }
   
}

// Here is the code for moving the meme image around
// Track the interval id
var intervalId = 0;
// This function will make our image move around
function startImageMove(){
    // Create a variable that pionts to ur HTML meme image
    var meme  = document.getElementById("memeImage");
    
    intervalId = setInterval(function(){
        // Create a variable to hold the new x coordinate
        var newX = getRandomCoordinate();
        // Create a variable to hold the new y coordinate
        var newY = getRandomCoordinate();

        // Lets change the location of our image
        meme.style.left = newX + "px";
        meme.style.top = newY + "px";
        
        // Output the new info to the console for the debugging purposes
        console.log("x: " +  meme.style.left + "top: " +  meme.style.top);
    }, 1000); // The 100 is time in milliseconds - 1000 is 1 second
            //This code wil move the image every 1 second
}
function stopImageMove(){
    // Call the built in JavaScript function to clear the interval - stop the image from moving
    clearInterval(intervalId);
}
// Create a function to generate our coordinate randomly
function getRandomCoordinate(){
    // This function will return random coordinates back to the code that called it
    return Math.floor(Math.random() * 1000);
}

// *******************
// Heare are the 2 functions that run the palindrome checking
function palindromesFun(){
    // console.log(palindromesTest("radar"));
    // console.log(palindromesTest("Fun stuff"));

    // Flag variable to test if the user wants to continue
    var bContinue = true;
    do{
        // Prompt the user to enter a word
        var userInput = prompt("Enter a word to see if it a palindrome: ");
        // Check to see if the user's word is a palindrome
        var bIsPalindrome = palindromesTest(userInput);

        //  Create a message for the user
        var message = "";
        // If the word is a palindrome, let the user know
        if(bIsPalindrome){
            // Tell the user that their word is a palindrome
            message = userInput + " is a palindrome!";
        }
        // If the word is Not a palindrome, let the user know
        else{
            // Tell the user that their word is Not a palindrome
            message = userInput + " is not a palindrome!";
        }
        // Display message to the user
        alert(message);
        
        // Prompt the user to see if they want to continue
        var answer = prompt("Do you want to continue? (y/n)");
        // Check the answer , if n, exit the loop
        if(answer == "n"){
            // Set our boolean loop monitor to false so that the loop will stop running
            bContinue = false;
        }
    }
    while(bContinue); // While bContinue is true, the loop will keep running; if bContinue is false, the loop will not run anymore
}
// This function will test a string to see if it is the same forwards and backwards
function palindromesTest(strToTest){
    // Remove the white space from the string and make it lowercase
    var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();
    console.log("strCleaned=" + strCleaned);

    // Put the string into an array so we can easily reverse it
    var strArray = strCleaned.split("");
    // Now lets reverse the order of the letters in the array
    var strReversedArray = strArray.reverse();
    // Return the array back into a string
    var strRev =strReversedArray.join("");
    console.log("strRev=" + strRev);

    // Test to see if the 2 strings are the same, both forwards and backwards
    // If the words are the same, the function will return true; if not, the function will return false
    return strRev == strCleaned;
}