// 5. evens
// Return only the even numbers.   evens([1, 2, 3, 4]) → [2, 4]
// Passed all tests on 2026-10-07
// ---------- my solution ----------
function evens(arr) {
  const result = [];
  for(const num of arr){
    if(num % 2 ===0){
        result.push(num);
      }
    }
    return result
}

console.log(evens([1,2,3,4,6,50]));
