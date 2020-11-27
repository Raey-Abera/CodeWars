// Task:
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes:
// Array/list size is at least 2

// Array/list numbers could be a mixture of positives, negatives also zeroes 

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10 = 50.

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

const adjacentElementsProduct = arr => {
    let newArr = []
    for (i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i] * arr[i + 1])
    }
    return Math.max(...newArr)
}

// Positive numbers
console.log('test1', adjacentElementsProduct([5, 8]))//40
console.log('test2', adjacentElementsProduct([1, 2, 3]))//6
console.log('test3', adjacentElementsProduct([1, 5, 10, 9]))//90
console.log('test4', adjacentElementsProduct([4, 12, 3, 1, 5]))//48
console.log('test5', adjacentElementsProduct([5, 1, 2, 3, 1, 4]))//6

// Both positive and negative values
console.log('test6', adjacentElementsProduct([3, 6, -2, -5, 7, 3]))//21
console.log('test7', adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))//50
console.log('test8', adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]),)//30
console.log('test9', adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))
//-14
console.log('test10', adjacentElementsProduct([5, 1, 2, 3, 1, 4]))//6

// Contains zeroes
console.log('test11', adjacentElementsProduct([1, 0, 1, 0, 1000]))//0
console.log('test12', adjacentElementsProduct([1, 2, 3, 0]))//6