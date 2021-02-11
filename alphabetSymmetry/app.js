https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

//refactored solution 
const solve = arr => {
    let alphabeth = 'abcdefghijklmnopqrstuvwxyz'
    return arr.map(char => char.toLowerCase().split('').filter((el, i) => i === alphabeth.indexOf(el)).length)
}

//slower solution 
const solve = arr => {

    let map = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            const char = arr[i][j].toLowerCase()
            if (char === map[j]) {
                count++
            }
        }

        result.push(count)
        count = 0
    }

    return result
}