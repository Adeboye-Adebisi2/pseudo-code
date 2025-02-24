const readline = require("readline");

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkCredit(name, age, attempts = 3) {
  rl.question("How many O'level credits do you have? ", (credits) => {
    if (credits < 6) {
      attempts--; // Decrement the number of attempts
      if (attempts > 0) {
        console.log(
          `Sorry 😔 ${name}. You don't have enough credits. You have ${attempts} attempt(s) left.`
        );
        checkCredit(name, age, attempts); // Recursively ask again
      } else {
        console.log(
          `Sorry 😔 ${name}. You've used all your attempts. You cannot buy Jamb form yet!`
        );
        rl.close(); // Close the readline interface
      }
    } else {
      console.log(
        `Congratulations 🎉!! ${name}. You are ${age} years old and can proceed to buy Jamb form!`
      );
      rl.close(); // Close the readline interface
    }
  });
}

// Prompt the user for input
rl.question("What is your name? ", (name) => {
  rl.question("How old are you? ", (age) => {
    if (age <= 13) {
      console.log(
        `Sorry 😔 ${name}. You are ${age} years old and cannot buy Jamb form yet!`
      );
      rl.close(); // Close the readline interface
    } else {
      rl.question(
        "Are you currently in secondary school? (y/n) ",
        (inSecSch) => {
          if (inSecSch.toLowerCase() === "y") {
            console.log(
             `Thanks for your interest, ${name}, but you need to finish secondary school to apply!`
            );
            rl.close(); // Close the readline interface
          } else {
            checkCredit(name, age); // Proceed to check credits
          }
        }
      );
    }
  });
});