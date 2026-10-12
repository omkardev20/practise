// 1. countUp
// Return an array of numbers from 1 to n.   countUp(4) → [1, 2, 3, 4]
// Passed all tests on 2026-10-06
// ---------- my solution ----------
function countUp(n) {
 let results = [];
 for(let i = 1; i<=n; i++){
   results.push(i);
   }
   return results;
}

console.log(countUp(4));
