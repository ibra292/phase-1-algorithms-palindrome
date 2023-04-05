function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let leftIndex = 0;
  let rightIndex = word.length - 1;

  while (leftIndex < rightIndex) {
    if (word[leftIndex] !== word[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
}

/* 
  Add your pseudocode here
*/
// 1 Convert the input word to lowercase
// 2 Initialize a left index variable to 0 and a right index variable to the end of the word
// 3 While the left index is less than the right index, check if the characters at those indices are equal, if not, return false
// 4 Increment the left index and decrement the right index
// 5 If the loop completes without returning false, the word is a palindrome, return true
/*
  Add written explanation of your solution here
*/
// The isPalindrome() function checks if a given string is a palindrome. It does this by iterating through the string from both ends and 
// checking if the characters match. If a mismatch is found, it returns false. otherwise it returns true.
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
