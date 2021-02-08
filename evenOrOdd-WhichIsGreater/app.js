https://www.codewars.com/kata/57f7b8271e3d9283300000b4

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

const evenOrOdd = str => {
    let evenSum = 0
    let oddSum = 0
    
    str.split('').forEach(num => {
      const int = Number(num)
      if (int % 2 === 1) {
        oddSum += int
      }
      else {
        evenSum += int
      }
    })
  
    if (evenSum === oddSum) return 'Even and Odd are the same'
      
    return evenSum > oddSum ? 'Even is greater than Odd' : 'Odd is greater than Even'
  }