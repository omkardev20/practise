// 3. findFirst
// Return the first number in arr strictly greater than threshold, or null if none found.   findFirst([3, 7, 2, 9], 5) → 7
// Passed all tests on 2026-10-08
// ---------- my solution ----------
function findFirst(arr, threshold) {
  for (let i = 0; i < arr.length; i++){
    if(arr[i] >= threshold){
      return arr[i];
      }
      
      }
  return null;
}

console.log(findFirst([3,7,2,9],5));
