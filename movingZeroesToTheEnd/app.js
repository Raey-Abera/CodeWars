https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {
    const zeroArr = arr.filter(i => i === 0)
    const noZeroArr = arr.filter(i => i !== 0)
    zeroArr.forEach(char => noZeroArr.push(char))
    return noZeroArr
}