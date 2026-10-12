// 11. isPrime
// Return true if n is prime.   isPrime(7) → true, isPrime(8) → false, isPrime(1) → false
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function isPrime(n){
  if(n < 2 ){
    return false;
    }
    
    for(let i = 2; i <n; i++){
      if(n%i ===0 ){
        return false ;
        }
      }
      return true;
  }
