// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Array/list will contain positives only 
// Array/list will always has even size

const minSum = arr =>
    arr.sort((a, b) => a - b).reduce((acc, curr) => acc + curr * arr.pop(), 0);

console.log(minSum([5, 4, 2, 3]))//22
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
console.log(minSum([12, 6, 10, 26, 3, 24]))//342
// Explanation:
// The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]))//74
// Explanation:
// The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74