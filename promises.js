// 1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

const testNum = (num, lessThanTen, greaterThanTen) => {
  if (num > 10) {
    greaterThanTen(`${num} is greater than 10, success!`)
  } else {
    lessThanTen(`${num} is less than 10, error!`)
  }
}

// 2. Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

// Questions
// What is .then() used for, and what is .catch() used for?
// What are good use cases for Promises?
// What other libraries/functions can you find that use Promises?