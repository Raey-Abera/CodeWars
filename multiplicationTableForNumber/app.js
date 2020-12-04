// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// 1 * 1 = 1
// 2 * 1 = 2
// 3 * 1 = 3
// 4 * 1 = 4
// 5 * 1 = 5
// 6 * 1 = 6
// 7 * 1 = 7
// 8 * 1 = 8
// 9 * 1 = 9
// 10 * 1 = 10

const multiTable = (number) => {
    let tableResult = '';

    for (let i = 1; i <= 10; i++) {
        tableResult += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }

    return tableResult;
}

console.log(multiTable(5))// 50
console.log(multiTable(1))// 10
