// 6. productArray
// Return the product (multiplication) of all numbers in arr. For an empty array return 1.   productArray([2, 3, 4]) → 24
// Passed all tests on 2026-10-08
// ---------- my solution ----------
function productArray(arr) {
  let product = 1; 
  for(let i = 0; i < arr.length; i++){
    product = product * arr[i];
    
   }
   return product;
}

console.log(productArray([2,3,4,2]));
