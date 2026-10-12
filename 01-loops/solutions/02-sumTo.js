// 2. sumTo
// Return the sum of all numbers from 1 to n.   sumTo(5) → 15
// Passed all tests on 2026-10-06
// ---------- my solution ----------
function sumTo(n) {
  let results = 0;
  for(let i = 0; i <= n; i++){
    results = results + i;
    }
    return results;
}

console.log(sumTo(5));
