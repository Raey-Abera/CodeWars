//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
/*
 * Function to check whether the given number is Even or Odd.
 * Integer number.
 * Returns "Even" if the number is even "Odd" otherwise.
 */

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Sample Tests:
// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")
