// Challenge:
//
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//
// Example:
//
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//
// Addendum:
//
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
//
// "use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let flatArray = []
  array.forEach(function(el){//for each for
    el.forEach(function(innerEl){

      flatArray.push(innerEl)//pushing innerEl into the flatArray

    })

  })
  flatArray.sort(function(num1, num2){//sort is a comparison function
    return num1- num2 //subtracting either gives 0, negative #, or positive # to sort array
  })

  return flatArray;
}

// Sample Tests:
// 1
// describe("Example test cases", function() {
// 2
//   Test.assertSimilar(flattenAndSort([]), []);
// 3
//   Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
// 4
//   Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// 5
//   Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
// 6
// });
