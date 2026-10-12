// 4. findMax
// Return the largest number in the array (no Math.max).   findMax([3, 9, 2]) → 9
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function findMax(arr) {
  let max = arr[0];
  for(const num of arr){
    if (num>max){
      max = num;
      }
    }
    return max;
}

console.log(findMax([3,9,2,50,10,29,1,0,4,900]));
