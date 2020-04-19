// Setup
/*Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99 */

function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");
