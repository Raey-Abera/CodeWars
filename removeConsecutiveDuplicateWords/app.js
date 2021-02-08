https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    const arr = s.split(' ')
    let lastWord = [arr[0]]
    
    for(let i = 1; i < arr.length; i++){
      if(arr[i] !== arr[i-1]){
        lastWord.push(arr[i])
      }
    }
    return lastWord.join(' ')
  }