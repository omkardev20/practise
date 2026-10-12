// 10. factorial
// Factorial using a WHILE loop.   factorial(5) → 120  (5 × 4 × 3 × 2 × 1)
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function factorial(n) {
  let result = 1;
  for(let i = n; i >= 1; i--){
    result = result*i;
    }
    return result;
  
}

console.log(factorial(5));
