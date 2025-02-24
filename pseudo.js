Number 1 write a function that takes a person's age as input and categorizes them as:
// input = age
// output = string

function ageCategories (age){

    if (typeof age !== typeof 12){
        return "this is not a number";
    }
    if ( age < 0){
        return "age cannot be lower than 0";
    }
    if (age > 150){
        return "age cannot be more than 150";
    }
    if (age <=1){
        return "infant"
    }else if (age <=12){
        return "Child"
    }else if (age <=19){
        return "Teenager"
    }else if (age <=64){
        return "Adult"
    }else {
        return "Senior"
    }
}




Number 2 
pseudo code
// if the password is less than 8 characters return passwword too short 
// loop to 
// if the password contains numbers, uppercase,lowercase and special characters return strong password 

function passwordChecker (password) {
    if (password.length < 8) {
        return "Password too short ";
    }
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    let specialChar = "!@#$%^&*()<>?/:{}|</>;

    for (let i = 0; i < password.length; i++){
        let char = password[i];

        if (char >= "A" && char <= "Z")
            hasUpperCase = true;
        if (char >= "a" && char <= "z")
            hasLowerCase = true;
        if (char >="0" && char <= "9")
            hasNumber = true;
        if (specialChar.includes(char))
            hasSpecialChar = true;
    }

    if (hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar) {
        return "Strong Password";
    } else {
        "Weak Password";
    }
}

console.log(passwordChecker("Passw0rd!"));


Number 3 Write a function that checks whether a given word or phrase (ignoring spaces and capitalization) is a palindrome 
// Pseudo code
// convert the input to lowercase to ignore capitalization
// remove spaces and special characters 
// reverse the string and compare it with the original 

function isPalindrome(characters) {
    characters = characters.toLowerCase();
    characters = characters.replace( /[^a-z0-9]/g, "");
    let reversedChar = characters.split("").reverse().join("");

    return characters === reversedChar;
}

console.log(isPalindrome("Madam"));

Number 4  create a function that takes a number as input and returns True if it's prime, otherwise false
// pseudo code 
// number greater than 1 that can only be divided by 1 or itself
// if num <= 1 not prime
// if num / 2 not prime
// but if no remainder is found its prime

function primeNumber(number) {
    if (num <= 1 ) {
        return " False"
    }
    for(let i = 2; i < number; i++){
        if (number % i === 0){
            return " Not prime";
        }
        
    }
     return "True"

}

Number 5 write a function that generates the first n numbers in the fibonacci sequence

function fibonacciGen






Number 6 write a function that takes a sentence as input and returns the number of words in it 

// input = sentence
// output = number of sentence

function getNum (characters) {
    all = characters.length;
    return all;
}

Number 7
 function temperatureConverter (celsius,fahrenheit){


 }

 Number 9 write a function that calculates the factorial of a given number using  recursion

 function factorial (n){
    if(n  === 0 || n === 1)
         return 1;
        return n * factorial(n-1) ;
     }
     


 Number 12 write a function that converts an amount from one currency to another based on a given exchange rate 
  function converter (exchangeRate){
     


  Number 13 create a function that reverses a string 

//   characters = string
//   output = reversed string

  function reverseStrings (string) {
    return string.split("").reverse().join("");
  }

  console.log(reverseStrings("bisola"));

  Number 14 write a function that takes a list of item prices and returns the total price, including a 10% discount if the total exceeds $100
  5 items 
  total price 
  if more than 100 - 10%
  
  let items = [item1, item2, item3, item4, item5 ]
  function addItems (items){

  }



  Number 15 write a function that simulates rolling a six-sided die and returns a random number between 1 and 6

//   generate random numbers
//   multiply by 6 , make the number a whole number, add 1 to range from 1-6


  function randomNum(){
    return  randomNum = Math.floor(Math.random()*6)+1;
  }



   







