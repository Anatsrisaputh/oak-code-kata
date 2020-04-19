// Setup
/*Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17 */

function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
