/*
Modify the function checkObj to test if an object passed 
to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
*/

// Solution 

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
