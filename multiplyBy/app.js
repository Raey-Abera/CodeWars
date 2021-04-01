const multiplyBy = function(num1){
    return function(num2) {
        return num1*num2
    }
}

const multiplyByTwo = multiplyBy(2)
const multiplyByTen = multiplyBy(10)

console.log('xxxx', multiplyByTwo(2))

