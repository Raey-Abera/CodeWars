// 101 Dalmatians - squash the bugs, not the dogs!
//
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
//
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
//
// The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(number){
  if (number <= 10) {
    return "Hardly any"
  } else if (number <= 50) {
    return "More than a handful!"
  } else if (number === 101) {
    return "101 DALMATIANS!!!"
  } else {
    return "Woah that's a lot of dogs!"
  }
}

// Test.describe("Basic tests",_=>{
// Test.assertEquals(howManyDalmatians(26), "More than a handful!");
// Test.assertEquals(howManyDalmatians(8), "Hardly any");
// Test.assertEquals(howManyDalmatians(14), "More than a handful!");
// Test.assertEquals(howManyDalmatians(80), "Woah that's a lot of dogs!");
// Test.assertEquals(howManyDalmatians(100), "Woah that's a lot of dogs!");
// Test.assertEquals(howManyDalmatians(101), "101 DALMATIANS!!!");
// })
