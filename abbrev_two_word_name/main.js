//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot seperating them.

//It should look like this:
//Sam Harris => S.H
//Patrick Feeney => P.F

function abbrevName(name){
var x = name.split(" ");
return x[0].charAt(0).toUpperCase() + "." + x[1].charAt(0).toUpperCase();
}

//Sample Tests:
//Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");
// 1
// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
//2
//Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
//3
//Test.assertEquals(abbrevName("Evan Cole"), "E.C");
//4
//Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
//5
//Test.assertEquals(abbrevName("David Mendieta"), "D.M");
