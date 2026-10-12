// 5. hasNegative
// Return true if at least one number in arr is < 0, otherwise false.   hasNegative([1, -2, 3]) → true
// Passed all tests on 2026-10-08
// ---------- my solution ----------
function hasNegative(arr) {
  for(let i =0; i < arr.length; i++){
    if(arr[i] <0 ){
      return true;
      }
    }
    return false;
}

console.log(hasNegative([1,-2,3]));
