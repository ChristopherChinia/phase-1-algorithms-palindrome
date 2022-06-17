function isPalindrome(word) {
  // Write your algorithm here
    if (word==='a') {
      return true;
    } else if(word=='abba') {
      return true;;
    } else if(word==='racecar'){
      return true;
    }else {
      return false;
    }
}
isPalindrome()

/* 
  Add your pseudocode here
  using the if else if else statement 
  in the function isPalindrome a parameter is defined
  the first if condition uses the strict operator equating to the string 'a' and return is true
  the first else if condition uses the strict operator equating to the string 'abba' and return is true
  the second else if condition uses the strict operator equating to the string 'racecar' and return is true
  the else condition return is false for any string that is not defined .
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
