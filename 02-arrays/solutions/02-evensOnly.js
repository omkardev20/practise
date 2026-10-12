// 2. evensOnly
// Return a new array containing only the even numbers.   evensOnly([1, 2, 3, 4]) → [2, 4]
// Passed all tests on 2026-10-08
// ---------- my solution ----------
function evensOnly(arr) {
  let total = []; 
  for(let i = 0; i <arr.length; i++){
    if(arr[i] % 2 === 0){
      total.push(arr[i]);
      }
    }
    return total;
}

console.log(evensOnly([1,2,3,4,5,9,10,13,16,88]));
