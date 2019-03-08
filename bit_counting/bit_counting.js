//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

let countBits = function(n) {
  // Program Me
  let x= n.toString(2)// base two returned
  let counter= 0;
  for (i =0; i < x.length; i++){ //iterating through the array to find the length
    if (x[i] === '1'){ // comparing the value of sub i to the sting passed through
      counter++ // incrementing
    }
  }
  return counter;
};
