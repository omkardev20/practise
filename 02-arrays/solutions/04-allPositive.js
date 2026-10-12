// 4. allPositive
// Return true if every number in arr is > 0, otherwise false. (Empty array returns true).   allPositive([1, 4, 9]) → true
// Passed all tests on 2026-10-08
// ---------- my solution ----------
function allPositive(arr) {
  for(let i =0; i < arr.length; i++){
    if(arr[i] <= 0){
      return false;
      }
    }
    return true;
}

console.log(allPositive([1,4,9, 2,9]));
