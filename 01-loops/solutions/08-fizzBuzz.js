// 8. fizzBuzz
// Return an array from 1 to n. Multiples of 3 → "Fizz", of 5 → "Buzz", of both → "FizzBuzz", otherwise the number.
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function fizzBuzz(n) {
  let result = [];
  for(let i = 1; i <=n; i++){
    if(i % 3 ===0 && i % 5 ===0){
      result.push("FizzBuzz");
      }
      else if(i % 3 === 0){
        result.push("Fizz");
        }
        else if (i % 5 ===0)
        {
          result.push("Buzz");
          }
          else {result.push(i);}
    } 
    return result;
}

console.log(fizzBuzz(16));
