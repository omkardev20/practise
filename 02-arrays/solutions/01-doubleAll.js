// 1. doubleAll
// Return a new array where every number is multiplied by 2.   doubleAll([1, 2, 3]) → [2, 4, 6]
// Passed all tests on 2026-10-08
// ---------- my solution ----------
function doubleAll(arr) {
    let total = [];
   for(let i=0; i < arr.length ; i ++){
     total.push(arr[i]*2)}
     return total;
}



console.log(doubleAll([1,2,3]));
