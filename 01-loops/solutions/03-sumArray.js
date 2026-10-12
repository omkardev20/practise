// 3. sumArray
// Return the sum of an array.   sumArray([1, 2, 3]) → 6
// Passed all tests on 2026-10-06
// ---------- my solution ----------
function sumArray(arr) {
  let total = 0;
  for(const num of arr){
    total = total+num;
    }
    return total;
}

console.log(sumArray([1,2,3,10]));
