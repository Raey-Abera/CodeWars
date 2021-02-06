https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

const stringTransformer = str => {
    const arr = str.split(' ').reverse().join(' ').split('')
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == ' '){
        continue
      } else if (arr[i] === arr[i].toLowerCase()){
        arr[i] = arr[i].toUpperCase()
      }
      else {
        arr[i] = arr[i].toLowerCase()
      }
    }
    return arr.join('')
  }